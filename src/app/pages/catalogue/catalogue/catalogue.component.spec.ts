import { CatalogueComponent } from './catalogue.component';
import { ListService } from 'src/app/core/service/list.service';
import { FilterPricePipe } from 'src/app/shared/pipes/filter-price.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Products } from 'src/app/core/models/global-products.models';
import { of } from 'rxjs';

describe('CatalogueComponent', () => {
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
        "productColor": "AZUL ORION",
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
    }]
    const formatedProductsAsc: Products[] = [{
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
    },
    {
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
        "productColor": "AZUL ORION",
        "class": "string",
    }
    ]
    let component: CatalogueComponent;
    let fixture: ComponentFixture<CatalogueComponent>;
    let service: ListService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [CatalogueComponent],
            providers: [ListService, FilterPricePipe],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(CatalogueComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        service = fixture.debugElement.injector.get(ListService);
    })
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('generate list of products', () => {
        const spy1 = jest.spyOn(service, 'getAllProducts').mockImplementation(() => of(formatedProducts));
        component.generateListProducts();
        expect(spy1).toHaveBeenCalledTimes(1);
    });
    it('change order of listProducts when filter of colors is active', () => {
        let order = 'asc';
        component.productsList = formatedProducts;
        component.isFilterColor = true;
        component.priceProductOrder(order);
        expect(component.productsList).toEqual(formatedProductsAsc);
    });
    it('change order of listProducts when filter of colors is inactive', () => {
        let order = 'asc';
        component.products = formatedProducts;
        component.isFilterColor = false;
        component.priceProductOrder(order);
        expect(component.productsList).toEqual(formatedProductsAsc);
    });
    it('change order of listProducts', () => {
        component.productsList = formatedProducts;
        component.setProducts(formatedProductsAsc);
        expect(component.productsList).toEqual(formatedProductsAsc);
    });
});
