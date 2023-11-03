import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosViewComponent } from './heros-view.component';

describe('HerosViewComponent', () => {
  let component: HerosViewComponent;
  let fixture: ComponentFixture<HerosViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerosViewComponent]
    });
    fixture = TestBed.createComponent(HerosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
