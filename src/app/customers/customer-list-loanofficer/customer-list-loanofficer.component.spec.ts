import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListLoanofficerComponent } from './customer-list-loanofficer.component';

describe('CustomerListLoanofficerComponent', () => {
  let component: CustomerListLoanofficerComponent;
  let fixture: ComponentFixture<CustomerListLoanofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListLoanofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListLoanofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
