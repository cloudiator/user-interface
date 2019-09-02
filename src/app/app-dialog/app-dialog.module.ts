import {NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {
  ToastComponent,
  ConfirmNewCloudDialogComponent,
  DeleteCloudDialogComponent,
  DeleteScheduleDialogComponent,
  ScheduleDiagnosticDialogComponent
} from './dialogs';
import {DialogService} from './services/dialog.service';
import {ToastService} from './services/toast.service';

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
