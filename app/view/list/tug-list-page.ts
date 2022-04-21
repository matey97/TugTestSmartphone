import { EventData, Frame, ItemEventData, Page } from "@nativescript/core";
import { TugListViewModel } from "~/view/list/tug-list-view-model";
import { wearosSensors } from "nativescript-wearos-sensors";
import { PowerSavings } from "~/core/power-savings";

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  const model = getViewModel();
  model.tugSelectorLabel = page.getViewById("tugSelector");
  model.tugSelectorLabel.addPseudoClass("active");
  model.collectionSelectorLabel = page.getViewById("collectionSelector");
  page.bindingContext = model;

  preparePlugin();
}

export function onTugResultTap(args: ItemEventData) {
  const frame = Frame.getFrameById("main-frame");
  const selectedResult = getViewModel().getTugResult(args.index);

  frame.navigate({
    moduleName: "/view/result/tug-result-page",
    context: { tugResult: selectedResult }
  })
}

async function preparePlugin() {
  const isReady = await wearosSensors.isReady();
  if (!isReady) {
    console.log("Plugin was not ready! Going to prepare...");

    try {
      await wearosSensors.prepare();
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

let _vm;
function getViewModel() {
  if (!_vm)
    _vm = new TugListViewModel();
  return _vm;
}
