import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GLOBAL_URL } from '../../../environments/environment';
import { Products, Size } from '../../core/models/global-products';
import { PostsService } from '../../core/service/posts.service';
import { ProductsApy } from '../models/products-apy';

@Injectable({
  providedIn: 'root',
})
export class ListadosService {
  constructor(private _posservice: PostsService) {}
  getDetails(id: number):Observable<Products> {
    return this._posservice.getCharacters(id).pipe(
      map((data: ProductsApy) => {
        return this.pushProduct(data, false);
      })
    );
  }
  getAllProducts():Observable<Products[]> {
    return this._posservice.getCharacters().pipe(
      map((data: any) => {
        return data
          .filter((elm: ProductsApy) => elm.bundleProductSummaries!.length)
          .map((elm: ProductsApy) => {
            return this.pushProduct(elm?.bundleProductSummaries, true);
          });
      })
    );
  }

  pushProduct(data: any, detail?: boolean): Products {
    data = detail ? data[0] : data;
    let elmPrice: number = 0;
    let elmColor: string = '';
    let elmClass: string = '';
    return {
      id: data.id,
      name: data.name,
      size: data.sizeSystem,
      class: elmClass,
      color: data.detail?.colors.map((elm: Products) => {
        elmColor = elm.name;
        return {
          name: elm.name,
          id: elm.id,
          image: elm.image?.url,
          sizes: elm
            .sizes!.filter((elm: Size) => elm.visibilityValue === 'SHOW')
            .map((elm: Size) => {
              elmPrice = elm.price;
              return { name: elm.name, price: elm.price };
            }),
        };
      }),
      price: elmPrice,
      productColor: elmColor,
      reference: data.detail?.reference,
      longDescription: data.detail?.longDescription,
      imagepath: data.detail?.xmedia[0].path,
      idMedia: data.detail?.xmedia[0].xmediaItems[0].medias[0].idMedia,
      set: data.detail?.xmedia[0].xmediaItems[0].set,
      urlImg:
        GLOBAL_URL.baseUrlImage +
        data.detail?.xmedia[0].path +
        '/' +
        data.detail?.xmedia[0].xmediaItems[0].medias[0].idMedia +
        data.detail?.xmedia[0].xmediaItems[0].set +
        '.jpg',
    };
  }
}
