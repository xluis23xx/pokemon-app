import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRadioComponent } from './btn-radio.component';

describe('BtnRadioComponent', () => {
  let component: BtnRadioComponent;
  let fixture: ComponentFixture<BtnRadioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnRadioComponent]
    });
    fixture = TestBed.createComponent(BtnRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
