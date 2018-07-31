import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';
import {CloudViewComponent} from '../clouds/cloud-view/cloud-view.component';
import {NewCloudComponent} from '../clouds/new-cloud/new-cloud.component';
import {CloudOverviewComponent} from '../clouds/cloud-overview/cloud-overview.component';
import {FormsModule} from '@angular/forms';
import {CloudCardComponent} from '../clouds/cloud-card/cloud-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        CloudViewComponent,
        NewCloudComponent,
        CloudOverviewComponent,
        CloudCardComponent
      ],
      providers: []
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
