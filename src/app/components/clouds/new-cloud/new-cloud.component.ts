import {Component, OnInit} from '@angular/core';
import {NewCloud} from 'cloudiator-rest-api';
import {CloudDataService} from '../../../services/cloud-data.service';
import {Router} from '@angular/router';
import {DialogService} from '../../../services/dialog.service';
import {ConfirmNewCloudDialogComponent} from '../../../dialogs/confirm-new-cloud-dialog/confirm-new-cloud-dialog.component';
import {ToastService} from '../../../services/toast.service';
import {ToastType} from '../../../model/toast';

/**
 * A Form to add a new Cloud.
 */

@Component({
  selector: 'app-new-cloud',
  templateUrl: './new-cloud.component.html',
  styleUrls: ['./new-cloud.component.scss']
})
export class NewCloudComponent implements OnInit {

  public cloud: NewCloud = {
    endpoint: '',
    cloudType: 'PRIVATE',
    api: {
      providerName: ''
    },
    credential: {
      user: '',
      secret: ''
    },
    cloudConfiguration: {
      nodeGroup: '',
      properties: [
        {
          key: '',
          value: ''
        },
      ]
    }
  };

  constructor(private cloudDataService: CloudDataService,
              private dialogService: DialogService,
              private router: Router,
              private toastService: ToastService) {
  }

  ngOnInit() {
  }

  /**
   * Adds a new empty entry to the properties Array of cloud.
   */
  public addProperty() {
    this.cloud.cloudConfiguration.properties.push({key: '', value: ''});
  }

  /**
   * Filters empty property entries, as the server wont accept requests with empty properties,
   * then submits the new cloud and afterwards navigates back to the cloud overview.
   */
  public onSubmit() {

    const dialogRef = this.dialogService.open(ConfirmNewCloudDialogComponent);

    dialogRef.afterClosed().subscribe(value => {
      if (value) {
        this.cloud.cloudConfiguration.properties = this.cloud.cloudConfiguration.properties.filter(p => p.key !== '');
        this.cloudDataService.addCloud(this.cloud).toPromise()
          .then(() => {
            this.router.navigateByUrl('/clouds');
            this.toastService.show({text: 'successfully added Cloud', type: ToastType.SUCCESS}, true);
          })
          .catch(() => {
            console.error('could not add cloud');
            this.toastService.show({text: 'could not add Cloud', type: ToastType.DANGER});
          });
      }
    });
  }

}
