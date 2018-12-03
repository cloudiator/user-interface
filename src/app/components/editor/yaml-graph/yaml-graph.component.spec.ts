import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlGraphComponent } from './yaml-graph.component';
import {RootStoreModule} from '../../../root-store';

describe('YamlGraphComponent', () => {
  let component: YamlGraphComponent;
  let fixture: ComponentFixture<YamlGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlGraphComponent ],
      imports: [
        RootStoreModule
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
