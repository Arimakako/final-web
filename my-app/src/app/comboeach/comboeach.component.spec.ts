import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboeachComponent } from './comboeach.component';

describe('ComboeachComponent', () => {
  let component: ComboeachComponent;
  let fixture: ComponentFixture<ComboeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComboeachComponent]
    });
    fixture = TestBed.createComponent(ComboeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
