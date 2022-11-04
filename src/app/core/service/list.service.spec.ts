import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductsApy } from '../models/products-apy.models';
import { ListService } from './list.service';
import { PostService } from './posts.service';
import { Products } from '../models/global-products.models';
import { GLOBAL_URL } from 'src/environments/environment';


describe('ListService', () => {
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
  const PostServiceMock = {
    getProductsCatalogue: () => of(listProducts),
    getProductsDetails: () => of(Product)
  };
  let service: ListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provider: PostService, useValue: PostServiceMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });
  beforeEach(() => {
    service = TestBed.inject(ListService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    jest.resetAllMocks();
    httpMock.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('get products from the subscription of post service', () => {
    service.getAllProducts().subscribe((resp: Products[]) => {
      expect(resp).toEqual(formatedProducts);
    });
    const req = httpMock.expectOne(GLOBAL_URL.urlApy);
    expect(req.request.method).toBe('GET');
    req.flush(formatedProducts);
  });
  it('get product from the subscription of post service', () => {
    service.getDetails(114219773).subscribe((resp: Products) => {
      expect(resp).toEqual(formatedProducts[0]);
    });
    const req = httpMock.expectOne(`${GLOBAL_URL.urlDetails}114219773/detail?languageId=-5&appId=1`);
    expect(req.request.method).toBe('GET');
    req.flush(formatedProducts);
  });
});
