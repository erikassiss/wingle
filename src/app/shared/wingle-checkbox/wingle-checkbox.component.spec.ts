import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WingleCheckboxComponent } from './wingle-checkbox.component';

describe('WingleCheckboxComponent', () => {
  let component: WingleCheckboxComponent;
  let fixture: ComponentFixture<WingleCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WingleCheckboxComponent]
    });
    fixture = TestBed.createComponent(WingleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
