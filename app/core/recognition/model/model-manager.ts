import { DataSource } from "~/core/data-source";
import { Model } from "~/core/recognition/model/index";
import { modelTypeFrom } from "~/core/recognition/model/model-type";
import { Folder, knownFolders, path } from "@nativescript/core";
import { getModelEnabledForDataSource, setModelEnabledForDataSource } from "~/core/settings";

const MODELS_FOLDER = "models";
const DEVICE_FOLDERS = new Map([
  [DataSource.LOCAL_DEVICE, "local-device"],
  [DataSource.PAIRED_DEVICE, "paired-device"]
]);

export class ModelManager {

  private models: Map<DataSource, Model[]>;

  constructor(private baseModelsPath = path.join(knownFolders.currentApp().path, MODELS_FOLDER)) {
    this.models = new Map<DataSource, Model[]>();
  }

  public async loadModels() {
    const localDeviceModels = await this.loadEmbeddedModelsFrom(DataSource.LOCAL_DEVICE);
    this.models.set(DataSource.LOCAL_DEVICE, localDeviceModels);

    const pairedDeviceModels = await this.loadEmbeddedModelsFrom(DataSource.PAIRED_DEVICE);
    this.models.set(DataSource.PAIRED_DEVICE, pairedDeviceModels)

    this.setModelsEnabledDefault();
  }

  public getModelEnabledForDataSource(dataSource: DataSource): Model {
    if (!this.models.has(dataSource)) {
      throw new Error(`Models not available for ${dataSource} data source.`);
    }
    const modelId = getModelEnabledForDataSource(dataSource);
    return this.models.get(dataSource).find((model) => model.modelInfo.id === modelId)
  }

  public getModels(): Model[] {
    return Array.from(this.models.values()).flat();
  }

  public getModelsFor(dataSource: DataSource): Model[] {
    return this.models.get(dataSource);
  }

  private async loadEmbeddedModelsFrom(dataSource: DataSource): Promise<Model[]> {
    const deviceModelsPath = path.join(this.baseModelsPath, DEVICE_FOLDERS.get(dataSource));
    const deviceModelsFolder = Folder.fromPath(deviceModelsPath);
    const architectures = await deviceModelsFolder.getEntities();
    return architectures.flatMap((architecture) => {
      try {
        const modelType = modelTypeFrom(architecture.name);
        const architectureFolder = Folder.fromPath(architecture.path);
        const modelsOfArchitecture = architectureFolder.getEntitiesSync();
        return modelsOfArchitecture.map((model) => new Model(model.path, modelType));
      } catch (ex) {
        console.log(`Failed to load models from ${architecture.path}. Reason: ${ex.message}`);
      }
    }).filter((model) => model !== undefined);
  }

  private setModelsEnabledDefault(): void {
    for (const key of this.models.keys()) {
      setModelEnabledForDataSource(this.models.get(key)[0].modelInfo.id, key);
    }
  }
}

let _instance;
export function getModelManager(): ModelManager {
  if (!_instance) {
    _instance = new ModelManager();
  }
  return _instance;
}
