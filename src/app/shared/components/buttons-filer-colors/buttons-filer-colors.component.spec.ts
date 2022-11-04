import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonsFilerColorsComponent } from './buttons-filer-colors.component';
import { ListService } from 'src/app/core/service/list.service';

describe('ButtonsFilerColorsComponent', () => {
  let component: ButtonsFilerColorsComponent;
  let fixture: ComponentFixture<ButtonsFilerColorsComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ButtonsFilerColorsComponent],
      providers:[ListService],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonsFilerColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
