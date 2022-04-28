import { Page } from "@nativescript/core";
import { SettingsModalViewModel } from "~/view/modals/settings/settings-modal-view-model";

export function navigatingTo(args) {
  const page = <Page>args.object;
  page.bindingContext = new SettingsModalViewModel();
}

export function onCloseModal(args) {
  args.object.closeModal();
}
