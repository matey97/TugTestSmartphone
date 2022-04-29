import { EventData, GridLayout, Observable, Page, Repeater, View } from "@nativescript/core";
import { getModelManager } from "~/core/recognition/model/model-manager";
import { getModelType, ModelType, SensingDataSource, setModelType } from "~/core/mode";
import { ModelInfo } from "~/core/recognition/model";

export class SettingsModalViewModel extends Observable {

  page: Page;
  repeater: Repeater;

  availableModels: DataSourceModels[] = [];

  constructor(
    private modelManager = getModelManager()
  ) {
    super();
    this.loadModelsForDataSources();
  }

  onViewLoaded(args: EventData){
    this.page = <Page>args.object;
    this.repeater = this.page.getViewById("repeater");
    this.markSelectedModels();
  }

  async onRefreshModelsTap(args: EventData) {
    const view = args.object as View;
    const animation = view.animate({
      rotate: 360,
      duration: 1000,
      iterations: Number.POSITIVE_INFINITY
    });

    setTimeout(async () => {
      await this.modelManager.loadModels();
      this.loadModelsForDataSources();
      animation.cancel();
      this.repeater.refresh();
      this.markSelectedModels();
    }, 1000);
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
    this.updateSelectedModel(
      selectedModelType,
      legibleStringToDataSource(dataSourceModels.dataSource)
    );
  }

  private loadModelsForDataSources() {
    this.availableModels = [];
    this.addDataSourceModelsIfAvailable(SensingDataSource.LOCAL_DEVICE);
    this.addDataSourceModelsIfAvailable(SensingDataSource.PAIRED_DEVICE);

    this.notifyPropertyChange("availableModels", this.availableModels);
  }

  private buildDataSourceModelsFor(dataSource: SensingDataSource): DataSourceModels {
    return {
      dataSource: dataSourceToLegibleString(dataSource),
      info: this.modelManager.getModelsFor(dataSource).map((model) => {
        return {
          vm: this,
          type: model.modelType,
          model: model.modelInfo
        }
      }).sort((a, b) => a.model.name > b.model.name ? 1 : -1)
    };
  }

  private addDataSourceModelsIfAvailable(dataSource: SensingDataSource) {
    const datasourceModels = this.buildDataSourceModelsFor(dataSource);
    if (datasourceModels.info.length !== 0)
      this.availableModels.push(datasourceModels);
  }

  private markSelectedModels() {
    this.availableModels.forEach((dataSourceModels) =>{
      const dataSource = dataSourceModels.dataSource;
      const selectedModelType = getModelType(legibleStringToDataSource(dataSource));

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

  private updateSelectedModel(modelType: ModelType, dataSource: SensingDataSource) {
    setModelType(modelType, dataSource);
  }
}

function dataSourceToLegibleString(dataSource: SensingDataSource): string {
  return dataSource === SensingDataSource.LOCAL_DEVICE
    ? "Local device"
    : "Paired device";
}

function legibleStringToDataSource(string: string): SensingDataSource {
  return string === "Local device"
    ? SensingDataSource.LOCAL_DEVICE
    : SensingDataSource.PAIRED_DEVICE;
}

interface DataSourceModels {
  dataSource: string,
  info: ModelInfoVM[]
}

interface ModelInfoVM {
  vm: SettingsModalViewModel,
  type: ModelType,
  model: ModelInfo
}