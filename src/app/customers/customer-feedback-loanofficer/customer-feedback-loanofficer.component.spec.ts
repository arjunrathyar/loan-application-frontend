import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFeedbackLoanofficerComponent } from './customer-feedback-loanofficer.component';

describe('CustomerFeedbackLoanofficerComponent', () => {
  let component: CustomerFeedbackLoanofficerComponent;
  let fixture: ComponentFixture<CustomerFeedbackLoanofficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerFeedbackLoanofficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerFeedbackLoanofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
