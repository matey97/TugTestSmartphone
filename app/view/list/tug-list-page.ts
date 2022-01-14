import { EventData, Frame, ItemEventData, Page } from "@nativescript/core";
import { TugListViewModel } from "~/view/list/tug-list-view-model";

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = getViewModel();
}

export function onTugResultTap(args: ItemEventData) {
  const frame = Frame.getFrameById("main-frame");
  const selectedResult = getViewModel().getTugResult(args.index);

  frame.navigate({
    moduleName: "/view/result/tug-result-page",
    context: { tugResult: selectedResult }
  })
}

let _vm;
function getViewModel() {
  if (!_vm)
    _vm = new TugListViewModel();
  return _vm;
}
