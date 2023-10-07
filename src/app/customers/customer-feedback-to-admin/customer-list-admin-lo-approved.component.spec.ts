import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListAdminLoApprovedComponent } from './customer-list-admin-lo-approved.component';

describe('CustomerListAdminLoApprovedComponent', () => {
  let component: CustomerListAdminLoApprovedComponent;
  let fixture: ComponentFixture<CustomerListAdminLoApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListAdminLoApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListAdminLoApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
