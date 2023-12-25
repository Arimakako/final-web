import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboNewComponent } from './combo-new.component';

describe('ComboNewComponent', () => {
  let component: ComboNewComponent;
  let fixture: ComponentFixture<ComboNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboNewComponent]
    });
    fixture = TestBed.createComponent(ComboNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
