import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlGraphComponent } from './yaml-graph.component';
import {combineReducers, StoreModule} from '@ngrx/store';
import * as fromRoot from '../../../reducers';

describe('YamlGraphComponent', () => {
  let component: YamlGraphComponent;
  let fixture: ComponentFixture<YamlGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlGraphComponent ],
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'feature': combineReducers(fromRoot.reducers)
        })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamlGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
