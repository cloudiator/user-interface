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
import { SshConsoleDialogComponent } from './dialogs/ssh-console-dialog/ssh-console-dialog.component';

/**
 * Main Module handling App DIalogs and Toasts.
 */
@NgModule({
  declarations: [
    ToastComponent,
    ConfirmNewCloudDialogComponent,
    DeleteCloudDialogComponent,
    DeleteScheduleDialogComponent,
    ScheduleDiagnosticDialogComponent,
    SshConsoleDialogComponent
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
    ScheduleDiagnosticDialogComponent,
    SshConsoleDialogComponent
  ]
})
export class AppDialogModule {
}
