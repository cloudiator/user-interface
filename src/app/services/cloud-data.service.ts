import {Injectable} from '@angular/core';
import {Cloud, CloudService, Hardware, Image, NewCloud} from 'cloudiator-rest-api';
import {Observable} from 'rxjs';
import * as fromRoot from '../reducers';
import * as cloudActions from '../actions/cloud-data.actions';
import {select, Store} from '@ngrx/store';
import {filter, map, reduce} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';
import {RuntimeConfigService} from './runtime-config.service';
import {ToastService} from './toast.service';
import {ToastType} from '../model/toast';

/**
 * Local layer between the cloud swagger service and Components, handles the redux store management of clouds.
 */

@Injectable({
  providedIn: 'root'
})
export class CloudDataService {

  constructor(private cloudApiService: CloudService,
              private runtimeConfigService: RuntimeConfigService,
              private store: Store<fromRoot.State>,
              private toastService: ToastService) {

    store.pipe(select(fromRoot.getRuntimeConfig)).subscribe(config => {
      cloudApiService.basePath = config.apiPath;
    });
  }

  /* CLOUDS */

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
    this.fetchClouds();
    return this.store.pipe(select(fromRoot.getClouds));
  }

  /**
   * Returns an Observable with the Cloud corresponding to the given id.
   * @param id {string} id to be searched for
   */
  public findCloud(id: string): Observable<Cloud> {
    this.fetchClouds();
    return this.store.pipe(select(fromRoot.getClouds), map(cloud => cloud.find(c => c.id === id)));
  }

  /**
   * Send a delete cloud request for the given id
   * @param id {string} id of cloud to be deleted
   */
  public deleteCloud(id: string) {
    this.cloudApiService.deleteCloud(id).toPromise().catch(err => {
      console.error('could not delete Cloud');
      this.toastService.show({text: 'could not delete Cloud', type: ToastType.DANGER}, true);
    });
  }

  /* HARDWARE */

  public findHardware(id?: string): Observable<Hardware[]> {
    this.fetchHardware();

    if (id) {
      return this.store.pipe(
        select(fromRoot.getHardware),
        map(hardware => hardware.filter(hw => hw.id.includes(id))));
    }
    return this.store.pipe(select(fromRoot.getHardware));
  }

  /* IMAGES */

  public findImages(id?: string): Observable<Image[]> {
    this.fetchImages();

    if (id) {
      return this.store.pipe(
        select(fromRoot.getImages),
        map(images => images.filter(image => image.id.includes(id))));
    }
    return this.store.pipe(select(fromRoot.getImages));
  }

  /**
   * Fetches all clouds from the Server and saves them in the Redux store.
   * before sending the request, the config file must be loaded to grant the correct api url
   */
  private fetchClouds() {

    this.runtimeConfigService.awaitConfigLoad().then(() => {

      // fetch Clouds
      this.cloudApiService.findClouds().toPromise()
        .then(clouds => {
          this.store.dispatch(new cloudActions.SetCloudsAction(clouds));
        })
        .catch(() => {
          console.error('could not fetch clouds');
          this.toastService.show({text: 'could not fetch clouds', type: ToastType.DANGER}, false);
        });
    });
  }

  private fetchHardware() {
    this.runtimeConfigService.awaitConfigLoad().then(() => {
      // ToDo: seperate api requests to clearly handle notifications;
      // fetch Hardware
      this.cloudApiService.findHardware().toPromise()
        .then(hardware => {
          this.store.dispatch(new cloudActions.SetHardwareAction(hardware));
        })
        .catch(() => {
          console.error('could not fetch Hardware');
          this.toastService.show({text: 'could not fetch Hardware', type: ToastType.DANGER}, false);
        });
    });
  }

  private fetchImages() {
    this.runtimeConfigService.awaitConfigLoad().then(() => {
      // fetch Images
      this.cloudApiService.findImages().toPromise()
        .then(images => {
          this.store.dispatch(new cloudActions.SetImagesAction(images));
        })
        .catch(() => {
          console.error('could not fetch Images');
          this.toastService.show({text: 'could not fetch Images', type: ToastType.DANGER}, false);
        });
    });
  }

  /**
   * Returns the cloud id of the given ID.
   * @param {string} id
   * @returns {string}
   */
  public findCloudId(id: string): string {
    // ToDo: unsafe, not sure if cloud id always ends with ~.
    return id.split('~')[0];
  }

  /**
   * Finds all Objects of the Hardware array that satisfy the search term.
   * @param {Hardware[]} hardwareArray Array to be filtered.
   * @param {string} searchTerm term to filter after.
   * @returns {Hardware[]} filtered Hardware array.
   */
  public filterHardware(hardwareArray: Hardware[], searchTerm: string): Hardware[] {

    const filterField = (field: string, operator: string, term: string): (curr: Hardware) => boolean => {
      switch (field.toLowerCase()) {
        case 'name':
          return (curr: Hardware) => operator === '=' && curr.name.toLowerCase() === term.toLowerCase();
        case 'cores':
          return (curr: Hardware) => this.compareNumbers(curr.cores, operator, term);
        case 'ram':
          return (curr: Hardware) => this.compareNumbers(curr.ram, operator, term);
        case 'disk':
          return (curr: Hardware) => this.compareNumbers(curr.disk, operator, term);
        default:
          // default case is used when no operator is found in the search term
          return (curr: Hardware) => {
            return curr.name.toLowerCase().includes(term.toLowerCase()) ||
              curr.cores.toString().toLowerCase().includes(term.toLowerCase()) ||
              curr.ram.toString().toLowerCase().includes(term.toLowerCase()) ||
              curr.disk.toString().toLowerCase().includes(term.toLowerCase());
          };
      }
    };

    return this.filter(hardwareArray, searchTerm, filterField);
  }

  /**
   * Finds all Objects of the Images array that satisfy the search term.
   * @param {Image[]} hardwareArray Array to be filtered.
   * @param {string} searchTerm term to filter after.
   * @returns {Image[]} filtered Image array.
   */
  public filterImages(hardwareArray: Image[], searchTerm: string): Image[] {

    const filterField = (field: string, operator: string, term: string): (curr: Image) => boolean => {
      switch (field.toLowerCase()) {
        case 'name':
          return (curr: Image) => operator === '=' && curr.name.toLowerCase() === term.toLowerCase();
        default:
          return (curr: Image) => {
            return curr.name.toLowerCase().includes(term.toLowerCase());
          };
      }
    };

    return this.filter(hardwareArray, searchTerm, filterField);
  }

  /**
   * Finds all Objects in the objArray that meet the requirements in the searchTerm.
   * @param {any[]} objArray array to be searched trough.
   * @param {string} searchTerm term to filter after.
   * @param {(field: string, operator: string, term: string) => (any) => boolean): any[]} filterFn
   * function that filters bye criteria, operator and parsed term eg. ram>4000
   * @returns {any[]} filtered Array
   */
  private filter(objArray: any[], searchTerm: string,
                 filterFn: (field: string, operator: string, term: string) => (any) => boolean): any[] {

    const terms = searchTerm.split(' ');

    const filteredOut: any[] = terms.reduce((acc, term) => acc.concat(...this.filters(objArray, term, filterFn)), []);

    return objArray.filter(obj => !filteredOut.includes(obj));
  }

  /**
   * Returns an array of all Objects that are to be filtered out.
   * @param {any[]} objArray array from where to filter out elements.
   * @param {string} searchTerm term to filter after.
   * @param {(field: string, operator: string, term: string) => (any) => boolean): any[]} filterFn
   * function that filters bye criteria, operator and parsed term eg. ram>4000
   * @returns {any[]} Objects from the objArray to be filtered out.
   */
  private filters(objArray: any[], searchTerm: string,
                  filterFn: (field: string, operator: string, term: string) => (any) => boolean): any[] {

    let filter: (any) => boolean;

    const fn = (operator: string): any[] => {
      const terms = searchTerm.split(operator, 2);

      if (terms[1] === '') {
        return objArray;
      }

      filter = filterFn(terms[0], operator, terms[1]);
      return objArray.filter(obj => !filter(obj));
    };


    if (searchTerm.includes('>=')) {
      return fn('>=');
    }

    if (searchTerm.includes('>')) {
      return fn('>');
    }

    if (searchTerm.includes('<=')) {
      return fn('<=');
    }

    if (searchTerm.includes('<')) {
      return fn('<');
    }

    if (searchTerm.includes('=')) {
      return fn('=');
    }

    filter = filterFn('', '', searchTerm);
    return objArray.filter(obj => !filter(obj));
  }

  /**
   * SUupport function that checks if a number compared to a string satisfies the given operator.
   * @param {number} field
   * @param {string} operator
   * @param {string} term
   * @returns {boolean}
   */
  private compareNumbers(field: number, operator: string, term: string): boolean {
    switch (operator) {
      case '=':
        return field === Number.parseInt(term);
      case '>':
        return field > Number.parseInt(term);
      case '>=':
        return field >= Number.parseInt(term);
      case '<':
        return field < Number.parseInt(term);
      case '<=':
        return field <= Number.parseInt(term);
      default:
        return false;
    }
  }
}
