import {Injectable} from '@angular/core';
import {Cloud, CloudService, NewCloud} from '..';
import {Observable} from 'rxjs';
import * as fromRoot from '../reducers';
import * as cloudActions from '../actions/cloud-data.actions';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CloudDataService {

  constructor(private cloudApiService: CloudService,
              private store: Store<fromRoot.State>) {
  }

  public addCloud(cloud: NewCloud): Observable<Cloud> {
    return this.cloudApiService.addCloud(cloud);
  }

  public findClouds(): Observable<Cloud[]> {
    this.fetch();
    return this.store.select(fromRoot.getClouds);
  }

  public findCloud(id: string): Observable<Cloud> {
    this.fetch();
    return this.store.select(fromRoot.getClouds).pipe(map(cloud => cloud.find(c => c.id === id)));
  }

  public deleteCloud(id: string) {
    this.cloudApiService.deleteCloud(id);
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
