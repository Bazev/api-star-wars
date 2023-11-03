import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHeroViewComponent } from './detail-hero-view.component';

describe('DetailHeroViewComponent', () => {
  let component: DetailHeroViewComponent;
  let fixture: ComponentFixture<DetailHeroViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailHeroViewComponent]
    });
    fixture = TestBed.createComponent(DetailHeroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
