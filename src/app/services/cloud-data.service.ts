import {Injectable} from '@angular/core';
import {Cloud, CloudService} from '..';
import {Observable} from 'rxjs';
import * as fromRoot from '../reducers';
import * as cloudActions from '../actions/cloud-data.actions';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class CloudDataService {

  constructor(private cloudApiService: CloudService,
              private store: Store<fromRoot.State>) {
  }

  public findClouds(): Observable<Cloud[]> {
    this.fetch();
    return this.store.select(fromRoot.getClouds);
  }

  private fetch() {
    this.cloudApiService.findClouds().toPromise()
      .then(clouds => {
        this.store.dispatch(new cloudActions.SetCloudsAction(clouds));
      })
      .catch(() => {
        throw new Error('could not fetch Clouds');
      });
  }
}
