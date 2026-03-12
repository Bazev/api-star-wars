import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDetailComponent } from './button-detail.component';
import { HeroService } from '../../core/services/hero.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ButtonDetailComponent', () => {
  let component: ButtonDetailComponent;
  let fixture: ComponentFixture<ButtonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDetailComponent, HttpClientTestingModule],
      providers: [HeroService]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
