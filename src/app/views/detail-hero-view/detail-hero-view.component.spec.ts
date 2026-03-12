import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailHeroViewComponent } from './detail-hero-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetailHeroViewComponent', () => {
  let component: DetailHeroViewComponent;
  let fixture: ComponentFixture<DetailHeroViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailHeroViewComponent, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailHeroViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
