import { NavigatedData, Page } from "@nativescript/core";
import { TugResultViewModel } from "~/view/result/tug-result-view-model";

export function navigatingTo(args: NavigatedData) {
  const page = <Page>args.object;

  page.bindingContext = new TugResultViewModel(args.context.tugResult);
}
