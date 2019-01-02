import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorGraphViewComponent } from './editor-graph-view.component';

describe('EditorGraphViewComponent', () => {
  let component: EditorGraphViewComponent;
  let fixture: ComponentFixture<EditorGraphViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorGraphViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
