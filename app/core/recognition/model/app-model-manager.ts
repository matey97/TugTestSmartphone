import { DataSource } from "~/core/data-source";
import { getModelEnabledForDataSource } from "~/core/settings";
import { getModelManager } from "@awarns/ml-kit";
import { AppModel } from "~/core/recognition/model/app-model";

export class AppModelManager {

  private models: Map<DataSource, AppModel[]>;

  constructor(
    private modelManager = getModelManager()
  ) {
    this.models = new Map<DataSource, AppModel[]>();
  }

  public async loadModels(forceLoad = false): Promise<void> {
    if (this.models.size !== 0 && !forceLoad) {
      return;
    }

    const models = await this.modelManager.listModels();
    const appModels = models.map(model => new AppModel(model));

    const localDeviceModels = appModels.filter(model => model.dataSource === DataSource.LOCAL_DEVICE);
    this.models.set(DataSource.LOCAL_DEVICE, localDeviceModels);

    const pairedDeviceModels = appModels.filter(model => model.dataSource === DataSource.PAIRED_DEVICE);
    this.models.set(DataSource.PAIRED_DEVICE, pairedDeviceModels)
  }

  public getModelEnabledForDataSource(dataSource: DataSource): AppModel {
    if (!this.models.has(dataSource)) {
      throw new Error(`Models not available for ${dataSource} data source.`);
    }
    const modelId = getModelEnabledForDataSource(dataSource);
    return this.models.get(dataSource).find((model) => model.id === modelId)
  }

  public getModels(): AppModel[] {
    return Array.from(this.models.values()).flat();
  }

  public getModelsFor(dataSource: DataSource): AppModel[] {
    return this.models.get(dataSource);
  }
}

let _instance;
export function getAppModelManager(): AppModelManager {
  if (!_instance) {
    _instance = new AppModelManager();
  }
  return _instance;
}
