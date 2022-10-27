import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsFilerColorsComponent } from './buttons-filer-colors.component';

describe('ButtonsFilerColorsComponent', () => {
  let component: ButtonsFilerColorsComponent;
  let fixture: ComponentFixture<ButtonsFilerColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsFilerColorsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonsFilerColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
