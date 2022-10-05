import { EventData, GridLayout, Observable, Page, Repeater, TextField } from "@nativescript/core";
import {
  getLocalDeviceStartCountdown,
  setLocalDeviceStartCountdown,
  setModelEnabledForDataSource,
} from "~/core/settings";
import { DataSource } from "~/core/data-source";
import { getAppModelManager, AppModel } from "~/core/ml/model/";

export class SettingsModalViewModel extends Observable {

  page: Page;
  repeater: Repeater;

  availableModels: DataSourceModels[] = [];

  private countdownTextField: TextField;
  private _countdownValue: number = getLocalDeviceStartCountdown();
  get countdownValue(): number {
    return this._countdownValue;
  }
  set countdownValue(value: number) {
    this._countdownValue = value;
    this.notifyPropertyChange("countdownValue", value);
  }

  private _editingCountdown = false;
  get editingCountdown() {
    return this._editingCountdown;
  }
  set editingCountdown(value) {
    this._editingCountdown = value;
    this.notifyPropertyChange("editingValue", value);

  }

  constructor(
    private modelManager = getAppModelManager(),
  ) {
    super();
    this.loadModelsForDataSources();
  }

  onViewLoaded(args: EventData){
    this.page = <Page>args.object;
    this.repeater = this.page.getViewById("repeater");
    this.countdownTextField = this.page.getViewById("countdownTextField");
    this.markSelectedModels();
  }

  modelSelected(args: EventData) {
    const container = args.object as GridLayout;
    const context = container.bindingContext;
    const parentContext = container.parent.bindingContext;

    const vm = context.vm;
    vm.changeSelectedModel(parentContext, context.model.id);
  }

  changeSelectedModel(dataSourceModels: DataSourceModels, modelId: string) {
    this.updateSelection(dataSourceModels, modelId);
    this.updateSelectedModel(
      modelId,
      legibleStringToDataSource(dataSourceModels.dataSource)
    );
  }

  editCountdown() {
    this.countdownTextField.text = this.countdownValue.toString();
    this.editingCountdown = true;
  }

  countdownEdited() {
    const newValue = this.countdownTextField.text;
    const parsedValue = parseInt(newValue)
    this.countdownValue = !isNaN(parsedValue)
      ? parsedValue
      : 0;
    this.editingCountdown = false;
    setLocalDeviceStartCountdown(this.countdownValue);
  }

  private loadModelsForDataSources() {
    this.availableModels = [];
    this.modelManager.loadModels().then(() => {
      this.addDataSourceModelsIfAvailable(DataSource.LOCAL_DEVICE);
      this.addDataSourceModelsIfAvailable(DataSource.PAIRED_DEVICE);

      this.notifyPropertyChange("availableModels", this.availableModels);
    }).catch(e => console.log(`Could not load models. Reason ${JSON.stringify(e)}`));
  }

  private addDataSourceModelsIfAvailable(dataSource: DataSource) {
    const datasourceModels = this.buildDataSourceModelsFor(dataSource);
    if (datasourceModels.models.length !== 0)
      this.availableModels.push(datasourceModels);
  }

  private buildDataSourceModelsFor(dataSource: DataSource): DataSourceModels {
    return {
      dataSource: dataSourceToLegibleString(dataSource),
      models: this.modelManager.getModelsFor(dataSource).map((model) => {
        return {
          vm: this,
          model: model
        }
      }).sort((a, b) => a.model.name > b.model.name ? 1 : -1)
    };
  }

  private markSelectedModels() {
    this.availableModels.forEach((dataSourceModels) =>{
      const dataSource = dataSourceModels.dataSource;
      let selectedModel = this.modelManager.getModelEnabledForDataSource(legibleStringToDataSource(dataSource));
      if (!selectedModel) {
        selectedModel = dataSourceModels.models[0].model;
        this.updateSelectedModel(selectedModel.id, legibleStringToDataSource(dataSource));
      }

      this.updateSelection(dataSourceModels, selectedModel.id);
    });
  }

  private updateSelection(dataSourceModels: DataSourceModels, modelId: string) {
    dataSourceModels.models.forEach((modelInfoVM) => {
      const { id, name } = modelInfoVM.model;
      const view = this.page.getViewById(name);
      if (id === modelId) {
        view.addPseudoClass("active");
      } else {
        view.deletePseudoClass("active");
      }
    });
  }

  private updateSelectedModel(modelId: string, dataSource: DataSource) {
    setModelEnabledForDataSource(modelId, dataSource);
  }
}

function dataSourceToLegibleString(dataSource: DataSource): string {
  return dataSource === DataSource.LOCAL_DEVICE
    ? "Local device"
    : "Paired device";
}

function legibleStringToDataSource(string: string): DataSource {
  return string === "Local device"
    ? DataSource.LOCAL_DEVICE
    : DataSource.PAIRED_DEVICE;
}

interface DataSourceModels {
  dataSource: string,
  models: ModelVM[]
}

interface ModelVM {
  vm: SettingsModalViewModel,
  model: AppModel
}
