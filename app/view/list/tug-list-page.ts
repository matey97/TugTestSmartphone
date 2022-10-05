import { ActionItem, EventData, Frame, ItemEventData, Page, ShowModalOptions } from "@nativescript/core";
import { TugListViewModel } from "~/view/list/tug-list-view-model";
import { PowerSavings } from "~/core/power-savings";
import { getAppModelManager } from "~/core/ml/model/app-model-manager";
import { awarns } from "@awarns/core";

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  const model = getViewModel();
  model.tugSelectorLabel = page.getViewById("tugSelector");
  model.tugSelectorLabel.addPseudoClass("active");
  model.collectionSelectorLabel = page.getViewById("collectionSelector");
  page.bindingContext = model;

  preparePlugin();
  prepareModels();
}

export function onTugResultTap(args: ItemEventData) {
  const frame = Frame.getFrameById("main-frame");
  const selectedResult = getViewModel().getTugResult(args.index);

  frame.navigate({
    moduleName: "/view/result/tug-result-page",
    context: { tugResult: selectedResult }
  })
}

export function onSettingsOptionTap(args: ItemEventData) {
  const actionItem = <ActionItem>args.object;
  const options: ShowModalOptions = {
    context: undefined,
    closeCallback: () => {},
    fullscreen: true,
    animated: true
  }

  actionItem.showModal(
    "/view/modals/modal-root",
    options
  );
}

async function preparePlugin() {
  const isReady = await awarns.isReady();
  if (!isReady) {
    console.log("Plugin was not ready! Going to prepare...");

    try {
      await awarns.prepare();
    } catch (e) {
      console.log(`Could not prepare plugin. Reason: ${JSON.stringify(e)}`);
    }
  }

  const powerSavings = new PowerSavings();
  if (powerSavings.areDisabled()) {
    return;
  }

  await powerSavings.requestDeactivationRationale();
}

async function prepareModels() {
  const modelManager = getAppModelManager();
  return await modelManager.loadModels();
}

let _vm;
export function getViewModel(): TugListViewModel {
  if (!_vm)
    _vm = new TugListViewModel();
  return _vm;
}
