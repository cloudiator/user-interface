import {Injectable} from '@angular/core';
import {Cloud, CloudService, NewCloud} from '..';
import {Observable} from 'rxjs';
import * as fromRoot from '../reducers';
import * as cloudActions from '../actions/cloud-data.actions';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

/**
 * Local layer between the cloud swagger service and Components, handles the redux store management of clouds.
 */

@Injectable({
  providedIn: 'root'
})
export class CloudDataService {

  constructor(private cloudApiService: CloudService,
              private store: Store<fromRoot.State>) {
  }

  /**
   * Sends a new addCloud request with the given cloud.
   * @param cloud {NewCloud} cloud to be added.
   */
  public addCloud(cloud: NewCloud): Observable<HttpResponse<Cloud>> {
    return this.cloudApiService.addCloud(cloud, 'response');
  }

  /**
   * Returns an Observable with all Clouds.
   */
  public findClouds(): Observable<Cloud[]> {
    this.fetch();
    return this.store.select(fromRoot.getClouds);
  }

  /**
   * Returns an Observable with the Cloud corresponding to the given id.
   * @param id {string} id to be searched for
   */
  public findCloud(id: string): Observable<Cloud> {
    this.fetch();
    return this.store.select(fromRoot.getClouds).pipe(map(cloud => cloud.find(c => c.id === id)));
  }

  /**
   * Send a delete cloud request for the given id
   * @param id {string} id of cloud to be deleted
   */
  public deleteCloud(id: string) {
    this.cloudApiService.deleteCloud(id);
  }

  /**
   * Fetches all clouds from the Server and saves them in the Redux store.
   */
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
