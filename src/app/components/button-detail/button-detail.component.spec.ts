import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDetailComponent } from './button-detail.component';

describe('ButtonDetailComponent', () => {
  let component: ButtonDetailComponent;
  let fixture: ComponentFixture<ButtonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDetailComponent]
    });
    fixture = TestBed.createComponent(ButtonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
