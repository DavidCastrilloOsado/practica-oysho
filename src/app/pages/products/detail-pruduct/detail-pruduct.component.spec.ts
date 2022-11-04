import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Products } from 'src/app/core/models/global-products.models';
import { ListService } from 'src/app/core/service/list.service';
import { ProductDetailComponent } from './detail-pruduct.component';

describe('ProductDetailComponent', () => {
    const formatedProduct: Products[] = [
        {
            "id": 114219773,
            "name": "Shorts compressive pocket 7cm",
            "size": "58",
            "class": "",
            "color": [
                {
                    "name": "AZUL ORION",
                    "id": "468",
                    "image": "/2022/I/3/1/p/0349/206/468/0349206468",
                    "sizes": [
                        {
                            "name": "XS",
                            "price": "2599"
                        },
                        {
                            "name": "S",
                            "price": "2599"
                        },
                        {
                            "name": "M",
                            "price": "2599"
                        },
                        {
                            "name": "L",
                            "price": "2599"
                        }
                    ]
                },
                {
                    "name": "NEGRO",
                    "id": "800",
                    "image": "/2022/I/3/1/p/0349/206/800/0349206800",
                    "sizes": [
                        {
                            "name": "XS",
                            "price": "2599"
                        },
                        {
                            "name": "XS",
                            "price": "2599"
                        },
                        {
                            "name": "XS",
                            "price": "2599"
                        },
                        {
                            "name": "S",
                            "price": "2599"
                        },
                        {
                            "name": "S",
                            "price": "2599"
                        },
                        {
                            "name": "M",
                            "price": "2599"
                        },
                        {
                            "name": "M",
                            "price": "2599"
                        },
                        {
                            "name": "L",
                            "price": "2599"
                        },
                        {
                            "name": "XL",
                            "price": "2599"
                        },
                        {
                            "name": "XL",
                            "price": "2599"
                        }
                    ]
                }
            ],
            "price": 2599,
            "productColor": "NEGRO",
            "reference": "30349206-I2022",
            "longDescription": "Pantalón corto con shorts interior compresivo en tejido moldeador que define y estiliza sin restringir los movimientos. Detalle de bolsillo interior. Con cintura siliconada para mayor efecto plano. Tejido de alta resistencia con protección solar UPF+40.",
            "imagepath": "/2022/I/3/1/p/0349/206/468",
            "idMedia": "0349206468_4_1_",
            "set": 0,
            "urlImg": "https://static.oysho.net/6/photos2/2022/I/3/1/p/0349/206/468/0349206468_4_1_0.jpg"
        }
    ]
    const listServiceMock = {
        getDetails: () => of(formatedProduct)
    };
    let component: ProductDetailComponent;
    let fixture: ComponentFixture<ProductDetailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
                imports:[],
                declarations: [ProductDetailComponent],
                providers: [{provide:ListService, useValue: listServiceMock}, {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of({'id':'114219773'})
                    }
                }],
                schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
            }).compileComponents();

    });
    beforeEach(() => {
        fixture = TestBed.createComponent(ProductDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    // productGet(id: number) {
    //     this._ListService
    //       .getDetails(id)
    //       .subscribe((det: Products) => (this.product = [det]));
    //   }
    it('get product fom lis of products', () => {
        component.productGet(114219773);
        expect(component.product).toEqual([formatedProduct])
    });
});
