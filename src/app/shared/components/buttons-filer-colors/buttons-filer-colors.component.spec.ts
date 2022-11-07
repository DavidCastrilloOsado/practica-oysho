import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Products } from 'src/app/core/models/global-products.models';
import { ListService } from 'src/app/core/service/list.service';
import { ButtonsFilerColorsComponent } from './buttons-filer-colors.component';
import { RemoveSpacesPipe } from '../../pipes/remove-spaces.pipe';

describe('ButtonsFilerColorsComponent', () => {
  let service: ListService;
  const listColors = ["NEGRO", "BLANCO"];
  const formatedProducts: Products[] = [{
    "id": 114219773,
    "name": "Shorts compressive pocket 7cm",
    "color": [{
      "id": "800",
      "name": "NEGRO",
      "image": "/2022/I/3/1/p/0349/206/800/0349206800",
      "sizes": [{
        "price": "2599",
        "name": "XS",
      }],
    }],
    "imagepath": "/2022/I/3/1/p/0349/206/468",
    "price": 2599,
    "productColor": "NEGRO",
    "class": "string",
  },
  {
    "id": 114219774,
    "name": "Shorts compressive pocket 8cm",
    "color": [{
      "id": "800",
      "name": "BLANCO",
      "image": "/2022/I/3/1/p/0349/206/800/0349206801",
      "sizes": [{
        "price": "1999",
        "name": "XL",
      }],
    }],
    "imagepath": "/2022/I/3/1/p/0349/206/469",
    "price": 1999,
    "productColor": "AZUL ORION",
    "class": "azulorion",
  }];
  const listServiceMock = {
    getAllProducts: () => of(formatedProducts)
  };
  let component: ButtonsFilerColorsComponent;
  let fixture: ComponentFixture<ButtonsFilerColorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsFilerColorsComponent, RemoveSpacesPipe],
      imports: [],
      providers: [{ provide: ListService, useValue: listServiceMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsFilerColorsComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(ListService);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('generate list of all products', () => {
    const spy1 = jest.spyOn(service, 'getAllProducts').mockImplementation(() => of(formatedProducts));
    component.generateListProducts();
    expect(spy1).toHaveBeenCalledTimes(1);
  });
  it('get list of colors from list of colors', () => {
    component.getColorsButtons()
    expect(component.getColorButtons).toEqual(listColors)
  });
  it('check if the color filter is activated', () => {
    component.visibleFilterColors = true
    component.toggleClassFilters();
    expect(component.visibleFilterColors).toBe(false)
  });
  it('pick up products that contain the received color', () => {
    component.products = formatedProducts;
    component.colorOrder("NEGRO");
    expect(component.productsList).toEqual([{
      "id": 114219773,
      "name": "Shorts compressive pocket 7cm",
      "color": [{
        "id": "800",
        "name": "NEGRO",
        "image": "/2022/I/3/1/p/0349/206/800/0349206800",
        "sizes": [{
          "price": "2599",
          "name": "XS",
        }],
      }],
      "imagepath": "/2022/I/3/1/p/0349/206/468",
      "price": 2599,
      "productColor": "NEGRO",
      "class": "string",
    }])
  });
  it('get all products', () => {
    component.products = formatedProducts;
    component.colorOrder("ALL-COLORS");
    expect(component.productsList).toEqual(formatedProducts)
  });
});
