import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlGraphComponent } from './yaml-graph.component';

describe('YamlGraphComponent', () => {
  let component: YamlGraphComponent;
  let fixture: ComponentFixture<YamlGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamlGraphComponent ]
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
