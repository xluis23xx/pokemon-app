import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHomeComponent } from './img-home.component';

describe('ImgHomeComponent', () => {
  let component: ImgHomeComponent;
  let fixture: ComponentFixture<ImgHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgHomeComponent]
    });
    fixture = TestBed.createComponent(ImgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
