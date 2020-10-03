import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorComponent } from './productor.component';

describe('ProductorComponent', () => {
  let component: ProductorComponent;
  let fixture: ComponentFixture<ProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
