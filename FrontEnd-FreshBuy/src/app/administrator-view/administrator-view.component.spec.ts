import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorViewComponent } from './administrator-view.component';

describe('AdministratorViewComponent', () => {
  let component: AdministratorViewComponent;
  let fixture: ComponentFixture<AdministratorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
