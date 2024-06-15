import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFilterComponent } from './btn-filter.component';

describe('BtnFilterComponent', () => {
  let component: BtnFilterComponent;
  let fixture: ComponentFixture<BtnFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnFilterComponent]
    });
    fixture = TestBed.createComponent(BtnFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
