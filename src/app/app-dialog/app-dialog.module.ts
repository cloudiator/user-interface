import {NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {ToastComponent} from './dialogs/toast/toast.component';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';
import {ConfirmNewCloudDialogComponent} from './dialogs/confirm-new-cloud-dialog/confirm-new-cloud-dialog.component';
import {DeleteCloudDialogComponent} from './dialogs/delete-cloud-dialog/delete-cloud-dialog.component';
import { DeleteScheduleDialogComponent } from './dialogs/delete-schedule-dialog/delete-schedule-dialog.component';
import { ScheduleDiagnosticDialogComponent } from './dialogs/schedule-diagnostic-dialog/schedule-diagnostic-dialog.component';

/**
 * Main Module handling App DIalogs and Toasts.
 */
@NgModule({
  declarations: [
    ToastComponent,
    ConfirmNewCloudDialogComponent,
    DeleteCloudDialogComponent,
    DeleteScheduleDialogComponent,
    ScheduleDiagnosticDialogComponent
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
    DeleteCloudDialogComponent,
    DeleteScheduleDialogComponent,
    ScheduleDiagnosticDialogComponent
  ]
})
export class AppDialogModule {
}
