import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFlow48Component } from './data-flow48.component';

describe('DataFlow48Component', () => {
  let component: DataFlow48Component;
  let fixture: ComponentFixture<DataFlow48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFlow48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFlow48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
