import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanofficerDashboardComponent } from './loanofficer-dashboard.component';

describe('LoanofficerDashboardComponent', () => {
  let component: LoanofficerDashboardComponent;
  let fixture: ComponentFixture<LoanofficerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanofficerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanofficerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
