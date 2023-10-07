import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAssignloAdminComponent } from './customer-assignlo-admin.component';

describe('CustomerAssignloAdminComponent', () => {
  let component: CustomerAssignloAdminComponent;
  let fixture: ComponentFixture<CustomerAssignloAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAssignloAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAssignloAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
