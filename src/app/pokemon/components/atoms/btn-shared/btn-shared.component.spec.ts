import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSharedComponent } from './btn-shared.component';

describe('BtnSharedComponent', () => {
  let component: BtnSharedComponent;
  let fixture: ComponentFixture<BtnSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnSharedComponent]
    });
    fixture = TestBed.createComponent(BtnSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
