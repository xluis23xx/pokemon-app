import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardErrorComponent } from './card-error.component';

describe('CardErrorComponent', () => {
  let component: CardErrorComponent;
  let fixture: ComponentFixture<CardErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardErrorComponent]
    });
    fixture = TestBed.createComponent(CardErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
