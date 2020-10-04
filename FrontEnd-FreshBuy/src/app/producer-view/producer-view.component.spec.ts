import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerViewComponent } from './producer-view.component';

describe('ProducerViewComponent', () => {
  let component: ProducerViewComponent;
  let fixture: ComponentFixture<ProducerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
