import {TestBed, inject, async} from '@angular/core/testing';

import {CloudDataService} from './cloud-data.service';
import {ApiModule, CloudService} from 'cloudiator-rest-api';
import {HttpClientModule} from '@angular/common/http';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as testData from '../../../testing/test-data';
import {DialogService} from './dialog.service';
import {ToastService} from './toast.service';
import {Injector} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {apiConfigFactory} from '../app.module';
import {of} from 'rxjs';

describe('CloudDataService', () => {

  const mockCloudService = jasmine.createSpyObj('CloudService', {
    'findClouds': of(testData.allClouds),
    'findCloud': of(testData.cloudOne),
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        }),
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory)
      ],
      providers: [
        CloudDataService,
        {provide: CloudService, useValue: mockCloudService},
        DialogService,
        ToastService,
        Overlay,
        Injector
      ]
    });
  });

  it('should be created', inject([CloudDataService], (service: CloudDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should find correct cloud', async(inject([CloudDataService], (service: CloudDataService) => {

    return service.findCloud(testData.cloudOne.id).toPromise().then(cloud => {
      console.log(cloud)
      expect(cloud.id).toEqual(testData.cloudOne.id);
      expect(cloud.id).not.toEqual(testData.cloudOne.id);
      // expect(true).toBeTruthy();
    });

  })));

  it('filterHardware should not error', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterHardware(null, '')).toBeNull();
    expect(service.filterHardware(testData.allHardware, '')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, '=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, '>')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, '>=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, '<=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, '<')).toEqual([]);
  }));

  it('filterHardware should find basic searches', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterHardware(testData.allHardware, ' ')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, testData.hardwareOne.name)).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, '2')).toEqual([testData.hardwareOne, testData.hardwareTwo]);
    expect(service.filterHardware(testData.allHardware, '10')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, '1024')).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, '-')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, '100')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'not a valid search')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, '1024 1024')).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, '1024 broken')).toEqual([]);
  }));

  it('filterHardware should find parameter equals', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterHardware(testData.allHardware, `name`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name=`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name= `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name=wrong`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name=${testData.hardwareOne.name}`)).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, `name=${testData.hardwareOne.name.slice(3, 15)}`)).toEqual([]);

    expect(service.filterHardware(testData.allHardware, `cores`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores=`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores= `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores=NaN`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores=1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores=2`)).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, `cores=-1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores=0.1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores=2.1`)).toEqual([]);

    expect(service.filterHardware(testData.allHardware, 'ram')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram= ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram=NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram=1024')).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, 'ram=1025')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram=-1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram=0.1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram=1024.1')).toEqual([]);

    expect(service.filterHardware(testData.allHardware, 'disk')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk= ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk=NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk=10')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk=11')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk=-1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk=0.1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk=10.1')).toEqual([]);
  }));

  it('filterHardware should find parameter greater than', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterHardware(testData.allHardware, `cloud`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cloud=`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cloud=222`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cloud=${testData.cloudTwo.id}`)).toEqual(testData.allHardware);

    expect(service.filterHardware(testData.allHardware, `id`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `id=`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `id=222`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `id=${testData.cloudTwo.id}`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `id=${testData.hardwareOne.id}`)).toEqual([testData.hardwareOne]);

    expect(service.filterHardware(testData.allHardware, `name>`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name> `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name>1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name>wrong`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name>${testData.hardwareOne.name}`)).toEqual([]);

    expect(service.filterHardware(testData.allHardware, `cores>`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores> `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores>NaN`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores>1`)).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, `cores>2`)).toEqual([testData.hardwareTwo, testData.hardwareTree]);
    expect(service.filterHardware(testData.allHardware, `cores>-1`)).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, `cores>0.1`)).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, `cores>2.1`)).toEqual([testData.hardwareTwo, testData.hardwareTree]);
    expect(service.filterHardware(testData.allHardware, `cores>10`)).toEqual([]);

    expect(service.filterHardware(testData.allHardware, 'ram>')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram> ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram>NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram>1024')).toEqual([testData.hardwareTwo, testData.hardwareTree]);
    expect(service.filterHardware(testData.allHardware, 'ram>1025')).toEqual([testData.hardwareTwo, testData.hardwareTree]);
    expect(service.filterHardware(testData.allHardware, 'ram>-1')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'ram>0.1')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'ram>1024.1')).toEqual([testData.hardwareTwo, testData.hardwareTree]);
    expect(service.filterHardware(testData.allHardware, 'ram>10000')).toEqual([]);

    expect(service.filterHardware(testData.allHardware, 'disk>')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk> ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk>NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk>10')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk>11')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk>-1')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk>0.1')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk>10.1')).toEqual([]);
  }));

  it('filterHardware should find parameter greater equals', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterHardware(testData.allHardware, `name>=`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name>= `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name>=1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name>=wrong`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name>=${testData.hardwareOne.name}`)).toEqual([]);

    expect(service.filterHardware(testData.allHardware, `cores>=`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores>= `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores>=NaN`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores>=1`)).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, `cores>=2`)).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, `cores>=-1`)).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, `cores>=0.1`)).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, `cores>=2.1`)).toEqual([testData.hardwareTwo, testData.hardwareTree]);
    expect(service.filterHardware(testData.allHardware, `cores>=10`)).toEqual([]);

    expect(service.filterHardware(testData.allHardware, 'ram>=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram>= ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram>=NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram>=1024')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'ram>=1025')).toEqual([testData.hardwareTwo, testData.hardwareTree]);
    expect(service.filterHardware(testData.allHardware, 'ram>=-1')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'ram>=0.1')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'ram>=1024.1')).toEqual([testData.hardwareTwo, testData.hardwareTree]);
    expect(service.filterHardware(testData.allHardware, 'ram>=10000')).toEqual([]);

    expect(service.filterHardware(testData.allHardware, 'disk>=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk>= ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk>=NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk>=10')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk>=11')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk>=-1')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk>=0.1')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk>=10.1')).toEqual([]);
  }));

  it('filterHardware should find parameter less than', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterHardware(testData.allHardware, `name<`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name< `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name<1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name<wrong`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name<${testData.hardwareOne.name}`)).toEqual([]);

    expect(service.filterHardware(testData.allHardware, `cores<`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores< `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<NaN`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<2`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<-1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<0.1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<2.1`)).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, `cores<10`)).toEqual(testData.allHardware);

    expect(service.filterHardware(testData.allHardware, 'ram<')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram< ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<1024')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<1025')).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, 'ram<-1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<0.1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<1024.1')).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, 'ram<10000')).toEqual(testData.allHardware);

    expect(service.filterHardware(testData.allHardware, 'disk<')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk< ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<10')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<11')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk<-1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<0.1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<10.1')).toEqual(testData.allHardware);
  }));

  it('filterHardware should find parameter less equals', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterHardware(testData.allHardware, `name<=`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name<= `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name<=1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name<=wrong`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `name<=${testData.hardwareOne.name}`)).toEqual([]);

    expect(service.filterHardware(testData.allHardware, `cores<=`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<= `)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<=NaN`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<=1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<=2`)).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, `cores<=-1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<=0.1`)).toEqual([]);
    expect(service.filterHardware(testData.allHardware, `cores<=2.1`)).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, `cores<=10`)).toEqual(testData.allHardware);

    expect(service.filterHardware(testData.allHardware, 'ram<=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<= ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<=NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<=1024')).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, 'ram<=1025')).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, 'ram<=-1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<=0.1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'ram<=1024.1')).toEqual([testData.hardwareOne]);
    expect(service.filterHardware(testData.allHardware, 'ram<=10000')).toEqual(testData.allHardware);

    expect(service.filterHardware(testData.allHardware, 'disk<=')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<= ')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<=NaN')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<=10')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk<=11')).toEqual(testData.allHardware);
    expect(service.filterHardware(testData.allHardware, 'disk<=-1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<=0.1')).toEqual([]);
    expect(service.filterHardware(testData.allHardware, 'disk<=10.1')).toEqual(testData.allHardware);
  }));

  it('filterImages should not error', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterImages(null, '')).toBeNull();
    expect(service.filterImages(testData.allImages, '')).toEqual(testData.allImages);
    expect(service.filterImages(testData.allImages, '=')).toEqual([]);
    expect(service.filterImages(testData.allImages, '>')).toEqual([]);
    expect(service.filterImages(testData.allImages, '>=')).toEqual([]);
    expect(service.filterImages(testData.allImages, '<=')).toEqual([]);
    expect(service.filterImages(testData.allImages, '<')).toEqual([]);
  }));

  it('filterImages should find basic searches', inject([CloudDataService], (service: CloudDataService) => {
    expect(service.filterImages(testData.allImages, `cloud`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `cloud=`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `cloud=222`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `cloud=${testData.cloudTwo.id}`)).toEqual(testData.allImages);

    expect(service.filterImages(testData.allImages, `id`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `id=`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `id=222`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `id=${testData.cloudTwo.id}`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `id=${testData.imageOne.id}`)).toEqual([testData.imageOne]);

    expect(service.filterImages(testData.allImages, ' ')).toEqual(testData.allImages);
    expect(service.filterImages(testData.allImages, testData.imageOne.name)).toEqual([testData.imageOne]);
    expect(service.filterImages(testData.allImages, '10sab')).toEqual([]);
    expect(service.filterImages(testData.allImages, 'not a valid search')).toEqual([]);
    expect(service.filterImages(testData.allImages, `${testData.imageOne.name.slice(1, 10)} ${testData.imageOne.name.slice(15, 17)}`))
      .toEqual([testData.imageOne]);

    expect(service.filterImages(testData.allImages, `os=`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `os=222`)).toEqual([]);
    expect(service.filterImages(testData.allImages, `os=${testData.imageThree.operatingSystem.operatingSystemFamily}`))
      .toEqual([testData.imageThree]);
  }));
});
