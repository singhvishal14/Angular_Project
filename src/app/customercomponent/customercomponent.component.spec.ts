import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercomponentComponent } from './customercomponent.component';

describe('CustomercomponentComponent', () => {
  let component: CustomercomponentComponent;
  let fixture: ComponentFixture<CustomercomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomercomponentComponent]
    });
    fixture = TestBed.createComponent(CustomercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
