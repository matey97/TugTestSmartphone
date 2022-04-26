import { ModelType, SensingDataSource } from "~/core/mode";
import CustomModelDownloadConditions = com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions;
import CustomModel = com.google.firebase.ml.modeldownloader.CustomModel;
import FirebaseModelDownloader = com.google.firebase.ml.modeldownloader.FirebaseModelDownloader;
import DownloadType = com.google.firebase.ml.modeldownloader.DownloadType;
import OnSuccessListener = com.google.android.gms.tasks.OnSuccessListener;
import OnFailureListener = com.google.android.gms.tasks.OnFailureListener;

const modelNameForDataSource = new Map([
  [SensingDataSource.LOCAL_DEVICE, new Map([
    [ModelType.MLP, "smartphone-model"],
    [ModelType.CNN, "cnn-smartphone"]
  ])],
  [SensingDataSource.PAIRED_DEVICE, new Map([
    [ModelType.MLP, "tug-test-full"],
    [ModelType.CNN, "cnn-smartwatch"]
  ])]
]);

export class ModelDownloader {

  private modelFilePath: string;

  constructor(
    private dataSource: SensingDataSource,
    private modelType: ModelType
  ) {
  }

  async getModelFilePath(): Promise<string> {
    if (this.modelFilePath)
      return this.modelFilePath;

    const model = await this.downloadModel();

    this.modelFilePath = model.getLocalFilePath();
    return this.modelFilePath;
  }

  private async downloadModel(): Promise<CustomModel> {
    const downloadConditions = this.buildDefaultConditions();
    return await this.startDownloadTask(downloadConditions);
  }

  private startDownloadTask(conditions: CustomModelDownloadConditions): Promise<CustomModel> {
    const modelName = modelNameForDataSource.get(this.dataSource).get(this.modelType);
    const downloadTask = FirebaseModelDownloader.getInstance()
      .getModel(modelName, DownloadType.LATEST_MODEL, conditions)

    return new Promise<CustomModel>((resolve, reject) => {
      downloadTask.addOnSuccessListener(
        new OnSuccessListener({
          onSuccess: (model: CustomModel) => resolve(model)
        }));
      downloadTask.addOnFailureListener(
        new OnFailureListener({
          onFailure: (e) => reject(`Could not download model. Reason: ${e}`)
        }));
    })
  }

  private buildDefaultConditions(): CustomModelDownloadConditions {
    return new CustomModelDownloadConditions.Builder()
      .requireWifi()
      .build();
  }
}
