import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboAdminComponent } from './combo-admin.component';

describe('ComboAdminComponent', () => {
  let component: ComboAdminComponent;
  let fixture: ComponentFixture<ComboAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboAdminComponent]
    });
    fixture = TestBed.createComponent(ComboAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
