import { EventData, GridLayout, Observable, Page } from "@nativescript/core";
import { getModelManager } from "~/core/recognition/model/model-manager";
import { getModelType, ModelType, SensingDataSource, setModelType } from "~/core/mode";
import { ModelInfo } from "~/core/recognition/model";

export class SettingsModalViewModel extends Observable {

  page: Page;

  availableModels: DataSourceModels[] = []

  constructor(
    private modelManager = getModelManager()
  ) {
    super();
    this.loadModelsForDataSources();
  }

  onViewLoaded(args: EventData){
    this.page = <Page>args.object;
    this.markSelectedModels();
  }

  modelSelected(args: EventData) {
    const container = args.object as GridLayout;
    const context = container.bindingContext;
    const parentContext = container.parent.bindingContext;

    const vm = context.vm;
    vm.changeSelectedModel(parentContext, context.model.name);
  }

  changeSelectedModel(dataSourceModels: DataSourceModels, modelName: string) {
    const selectedModelType = dataSourceModels.info
      .find((modelInfo) => modelInfo.model.name === modelName)
      .type;

    this.updateSelection(dataSourceModels, selectedModelType);
    this.updateSelectedModel(selectedModelType, dataSourceModels.dataSource)
  }

  private loadModelsForDataSources() {
    this.availableModels.push(this.buildDataSourceModelsFor(SensingDataSource.LOCAL_DEVICE));
    this.availableModels.push(this.buildDataSourceModelsFor(SensingDataSource.PAIRED_DEVICE));

    this.notifyPropertyChange("availableModels", this.availableModels);
  }

  private buildDataSourceModelsFor(dataSource: SensingDataSource): DataSourceModels {
    return {
      dataSource: dataSource,
      info: this.modelManager.getModelsFor(dataSource).map((model) => {
        return {
          vm: this,
          type: model.modelType,
          model: model.modelInfo
        }
      }).sort((a, b) => a.model.name > b.model.name ? 1 : -1)
    };
  }

  private markSelectedModels() {
    this.availableModels.forEach((dataSourceModels) =>{
      const dataSource = dataSourceModels.dataSource;
      const selectedModelType = getModelType(dataSource);

      this.updateSelection(dataSourceModels, selectedModelType);
    });
  }

  private updateSelection(dataSourceModels: DataSourceModels, selectedModelType: ModelType) {
    dataSourceModels.info.forEach((modelInfoVM) => {
      const modelName = modelInfoVM.model.name;
      const type = modelInfoVM.type;
      const view = this.page.getViewById(modelName);
      if (type === selectedModelType) {
        view.addPseudoClass("active");
      } else {
        view.deletePseudoClass("active");
      }
    });
  }

  private updateSelectedModel(modelType: ModelType, dataSource: SensingDataSource, ) {
    setModelType(modelType, dataSource);
  }
}

interface DataSourceModels {
  dataSource: SensingDataSource,
  info: ModelInfoVM[]
}

interface ModelInfoVM {
  vm: SettingsModalViewModel,
  type: ModelType,
  model: ModelInfo
}
