import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GLOBAL_URL } from 'src/environments/environment';
import { ProductsApy } from '../models/products-apy.models';
import { PostService } from './posts.service';
describe('PostService service', () => {
    const Product: ProductsApy[] = [
        {
            "id": 116704399,
            "name": "Shorts compressive pocket 7cm",
            "bundleProductSummaries": [
                {
                    "id": 114219773,
                    "name": "Shorts compressive pocket 7cm",
                    "bundleProductSummaries": [],
                    "detail": {
                        "colors": [
                            {
                                "id": "800",
                                "name": "NEGRO",
                                "image": {
                                    "timestamp": "1658484048904",
                                    "url": "/2022/I/3/1/p/0349/206/800/0349206800",
                                },
                                "sizes": [
                                    {
                                        "name": "XS",
                                        "price": "2599"
                                    }
                                ]

                            }
                        ],
                        "xmedia": [{
                            "path": "/2022/I/3/1/p/0349/206/468",
                            "xmediaItems": [{
                                "medias": [{
                                    "idMedia": "0349206468_4_1_"
                                }]
                            }]
                        }],
                    },
                }
            ],
            "detail": {
                "colors": [
                    {
                        "id": "800",
                        "name": "NEGRO",
                        "image": {
                            "timestamp": "1658484048904",
                            "url": "/2022/I/3/1/p/0349/206/800/0349206800",
                        },
                        "sizes": [
                            {
                                "name": "XS",
                                "price": "2599"
                            }
                        ]

                    }
                ],
                "xmedia": [{
                    "path": "/2022/I/3/1/p/0349/206/468",
                    "xmediaItems": [{
                        "medias": [{
                            "idMedia": "0349206468_4_1_"
                        }]
                    }]
                }],
            },

        },
    ]
    const listProducts: ProductsApy[] = [
        {
            "id": 116704399,
            "name": "Shorts compressive pocket 7cm",
            "bundleProductSummaries": [
                {
                    "id": 114219773,
                    "name": "Shorts compressive pocket 7cm",
                    "bundleProductSummaries": [],
                    "detail": {
                        "colors": [
                            {
                                "id": "800",
                                "name": "NEGRO",
                                "image": {
                                    "timestamp": "1658484048904",
                                    "url": "/2022/I/3/1/p/0349/206/800/0349206800",
                                },
                                "sizes": [
                                    {
                                        "name": "XS",
                                        "price": "2599"
                                    }
                                ]

                            }
                        ],
                        "xmedia": [{
                            "path": "/2022/I/3/1/p/0349/206/468",
                            "xmediaItems": [{
                                "medias": [{
                                    "idMedia": "0349206468_4_1_"
                                }]
                            }]
                        }],
                    },
                }
            ],
            "detail": {
                "colors": [
                    {
                        "id": "800",
                        "name": "NEGRO",
                        "image": {
                            "timestamp": "1658484048904",
                            "url": "/2022/I/3/1/p/0349/206/800/0349206800",
                        },
                        "sizes": [
                            {
                                "name": "XS",
                                "price": "2599"
                            }
                        ]

                    }
                ],
                "xmedia": [{
                    "path": "/2022/I/3/1/p/0349/206/468",
                    "xmediaItems": [{
                        "medias": [{
                            "idMedia": "0349206468_4_1_"
                        }]
                    }]
                }],
            },

        },
        {
            "id": 116704400,
            "name": "Shorts compressive pocket 8cm",
            "bundleProductSummaries": [
                {
                    "id": 114219774,
                    "name": "Shorts compressive pocket 8cm",
                    "bundleProductSummaries": [],
                    "detail": {
                        "colors": [
                            {
                                "id": "800",
                                "name": "BLANCO",
                                "image": {
                                    "timestamp": "16584840489046",
                                    "url": "/2022/I/3/1/p/0349/206/800/0349206801",
                                },
                                "sizes": [
                                    {
                                        "name": "XL",
                                        "price": "1999"
                                    }
                                ]

                            }
                        ],
                        "xmedia": [{
                            "path": "/2022/I/3/1/p/0349/206/469",
                            "xmediaItems": [{
                                "medias": [{
                                    "idMedia": "0349206468_4_2_"
                                }]
                            }]
                        }],
                    },
                }
            ],
            "detail": {
                "colors": [
                    {
                        "id": "800",
                        "name": "BLANCO",
                        "image": {
                            "timestamp": "1658484048905",
                            "url": "/2022/I/3/1/p/0349/206/800/0349206801",
                        },
                        "sizes": [
                            {
                                "name": "XL",
                                "price": "1999"
                            }
                        ]

                    }
                ],
                "xmedia": [{
                    "path": "/2022/I/3/1/p/0349/206/469",
                    "xmediaItems": [{
                        "medias": [{
                            "idMedia": "0349206468_4_2_"
                        }]
                    }]
                }],
            },

        },

    ]
    let service: PostService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    });
    beforeEach(() => {
        service = TestBed.inject(PostService);
        httpMock = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        jest.resetAllMocks();
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('get products return array of products', () => {
        service.getProductsCatalogue().subscribe((resp: ProductsApy[]) => {
            expect(resp).toEqual(listProducts);
        });
        const req = httpMock.expectOne(GLOBAL_URL.urlApy);
        expect(req.request.method).toBe('GET');
        req.flush(listProducts);
    })
    it('get product return a products from idm of products', () => {
        service.getProductsDetails(116704399).subscribe((resp: ProductsApy) => {
            expect(resp).toEqual(Product);
        });
        const req = httpMock.expectOne(`${GLOBAL_URL.urlDetails}116704399/detail?languageId=-5&appId=1`);
        expect(req.request.method).toBe('GET');
        req.flush(Product);
    })
});
