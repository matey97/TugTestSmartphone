import { ModelType, SensingDataSource } from "~/core/mode";
import { Model } from "~/core/recognition/model/index";
import { ModelDownloader } from "~/core/recognition/downloader";

const modelNameForDataSourceAndType = new Map([
  [modelKey(SensingDataSource.LOCAL_DEVICE, ModelType.MLP), "mlp-smartphone"],
  [modelKey(SensingDataSource.LOCAL_DEVICE, ModelType.CNN), "cnn-smartphone"],
  [modelKey(SensingDataSource.PAIRED_DEVICE, ModelType.MLP), "mlp-smartwatch"],
  [modelKey(SensingDataSource.PAIRED_DEVICE, ModelType.CNN), "cnn-smartwatch"],
]);

export class ModelManager {

  private models: Map<string, Model>;

  constructor() {
    this.models = new Map<string, Model>();
  }

  public async loadModels() {
    await Promise.all(
      Array.from(modelNameForDataSourceAndType.keys())
        .map(async (key) => {
          if (this.models.has(key)) {
            return;
          }

          try {
            const model = await this.downloadModel(key);
            this.models.set(key, model);
          } catch (e) {
            console.log(e);
          }
        })
    );
  }

  public getModels(): Model[] {
    return Array.from(this.models.values());
  }

  public async getModel(dataSource: SensingDataSource, modelType: ModelType): Promise<Model> {
    const key = modelKey(dataSource, modelType);
    if (!this.models.has(key)) {
      const model = await this.downloadModel(key);
      this.models.set(key, model);
    }

    return this.models.get(key);
  }

  private async downloadModel(modelKey: string): Promise<Model> {
    const modelName = modelNameForDataSourceAndType.get(modelKey);

    let modelFilePath;
    try {
      const modelDownloader = new ModelDownloader(modelName);
      modelFilePath = await modelDownloader.getModelFilePath();
      console.log(`${modelKey} model downloaded.`);
    } catch (e) {
      throw new Error(`${modelKey} model download failed. ${e}`);
    }

    return new Model(modelFilePath);
  }
}

function modelKey(dataSource: SensingDataSource, modelType: ModelType): string {
  return `${dataSource}_${modelType}`;
}

function dataSourceAndTypeFromKey(key: string) {
  const keys = key.split("_");
  return {
    dataSource: <SensingDataSource>keys[0],
    modelType: <ModelType>keys[1]
  }
}

let _instance;
export function getModelManager(): ModelManager {
  if (!_instance) {
    _instance = new ModelManager();
  }
  return _instance;
}
