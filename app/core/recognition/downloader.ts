import CustomModelDownloadConditions = com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions;
import CustomModel = com.google.firebase.ml.modeldownloader.CustomModel;
import FirebaseModelDownloader = com.google.firebase.ml.modeldownloader.FirebaseModelDownloader;
import DownloadType = com.google.firebase.ml.modeldownloader.DownloadType;
import OnSuccessListener = com.google.android.gms.tasks.OnSuccessListener;
import OnFailureListener = com.google.android.gms.tasks.OnFailureListener;

export class ModelDownloader {

  private modelFilePath: string;

  constructor(
    private modelName: string
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
    const downloadTask = FirebaseModelDownloader.getInstance()
      .getModel(this.modelName, DownloadType.LATEST_MODEL, conditions)

    return new Promise<CustomModel>((resolve, reject) => {
      downloadTask.addOnSuccessListener(
        new OnSuccessListener({
          onSuccess: (model: CustomModel) => resolve(model)
        }));
      downloadTask.addOnFailureListener(
        new OnFailureListener({
          onFailure: (e) => reject(`Download failure reason: ${e}`)
        }));
    })
  }

  private buildDefaultConditions(): CustomModelDownloadConditions {
    return new CustomModelDownloadConditions.Builder()
      .requireWifi()
      .build();
  }
}
