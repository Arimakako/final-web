import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboUpdateComponent } from './combo-update.component';

describe('ComboUpdateComponent', () => {
  let component: ComboUpdateComponent;
  let fixture: ComponentFixture<ComboUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboUpdateComponent]
    });
    fixture = TestBed.createComponent(ComboUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
