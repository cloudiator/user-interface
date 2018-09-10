import {Component, OnInit} from '@angular/core';
import {RuntimeConfigService} from '../../services/runtime-config.service';
import {ToastService} from '../../services/toast.service';
import {Toast, ToastType} from '../../model/toast';
import {text} from '@angular/core/src/render3/instructions';
import {DialogService} from '../../services/dialog.service';
import {ConfirmNewCloudDialogComponent} from '../../dialogs/confirm-new-cloud-dialog/confirm-new-cloud-dialog.component';

/**
 * Entry point of this app, everything is shown in this Container.
 * Contains shell elements like the navbar.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showBurgerMenu = false;

  constructor(private toastService: ToastService,
              private dialogService: DialogService) {
  }

  ngOnInit() {
  }
}
