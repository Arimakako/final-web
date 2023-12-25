import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboDeleteComponent } from './combo-delete.component';

describe('ComboDeleteComponent', () => {
  let component: ComboDeleteComponent;
  let fixture: ComponentFixture<ComboDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboDeleteComponent]
    });
    fixture = TestBed.createComponent(ComboDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
