import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructdirtestComponent } from './structdirtest.component';

describe('StructdirtestComponent', () => {
  let component: StructdirtestComponent;
  let fixture: ComponentFixture<StructdirtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructdirtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructdirtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
