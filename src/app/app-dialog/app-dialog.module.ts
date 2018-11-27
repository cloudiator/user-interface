import {NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {ToastComponent} from './dialogs/toast/toast.component';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';
import {ConfirmNewCloudDialogComponent} from './dialogs/confirm-new-cloud-dialog/confirm-new-cloud-dialog.component';
import {DeleteCloudDialogComponent} from './dialogs/delete-cloud-dialog/delete-cloud-dialog.component';

@NgModule({
  declarations: [
    ToastComponent,
    ConfirmNewCloudDialogComponent,
    DeleteCloudDialogComponent
  ],
  imports: [
    OverlayModule
  ],
  providers: [
    DialogService,
    ToastService
  ],
  entryComponents: [
    ToastComponent,
    ConfirmNewCloudDialogComponent,
    DeleteCloudDialogComponent
  ]
})
export class AppDialogModule {
}
