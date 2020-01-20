import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeShortDetailComponent } from './employee-short-detail.component';

describe('EmployeeDetailComponent', () => {
  let component: EmployeeShortDetailComponent;
  let fixture: ComponentFixture<EmployeeShortDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeShortDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
