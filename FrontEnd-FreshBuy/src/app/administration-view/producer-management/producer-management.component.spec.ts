import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerManagementComponent } from './producer-management.component';

describe('ProducerManagementComponent', () => {
  let component: ProducerManagementComponent;
  let fixture: ComponentFixture<ProducerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
