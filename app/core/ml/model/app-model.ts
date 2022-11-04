import { Model, ModelArchitecture } from "@awarns/ml-kit";
import { DataSource } from "~/core/data-source";

export class AppModel {
  public id: string;
  public name: string;
  public architecture: ModelArchitecture;
  public author: string;
  public version: string;
  public dataSource: DataSource;

  constructor(model: Model) {
    this.id = model.modelInfo.id.split('.')[0];
    this.name = model.modelInfo.name;
    this.architecture = model.modelInfo.architecture;
    this.author = model.modelInfo.author;
    this.version = model.modelInfo.version;
    this.dataSource = model.modelInfo.id.split('_')[0] === 'local'
      ? DataSource.LOCAL_DEVICE
      : DataSource.PAIRED_DEVICE;
  }
}
