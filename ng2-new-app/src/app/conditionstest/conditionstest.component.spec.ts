import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionstestComponent } from './conditionstest.component';

describe('ConditionstestComponent', () => {
  let component: ConditionstestComponent;
  let fixture: ComponentFixture<ConditionstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
