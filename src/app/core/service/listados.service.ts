import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GLOBAL_URL } from '../../../environments/environment';
import { Products, Size } from '../../core/models/global-products';
import { PostsService } from '../../core/service/posts.service';

@Injectable({
  providedIn: 'root',
})
export class ListadosService {
  constructor(private _posservice: PostsService) {}
  getDetails<Products>(id: number) {
    return this._posservice.getCharacters(id).pipe(
      map((data: any) => {
        return this.pushProduct(data, false);
      })
    );
  }
  getAllProducts<Products>() {
    return this._posservice.getCharacters().pipe(
      map((data: any) => {
        return data
          .filter((elm: any) => elm.bundleProductSummaries.length)
          .map((elm: any) => {
            return this.pushProduct(elm?.bundleProductSummaries, true);
          });
      })
    );
  }

  pushProduct(data?: any, detail?: boolean): Products {
    data = detail ? data[0] : data;
    return {
      id: data.id,
      name: data.name,
      size: data.sizeSystem,
      color: data.detail?.colors.map((elm: Products) => {
        return {
          name: elm.name,
          id: elm.id,
          image: elm.image?.url,
          sizes: elm
            .sizes!.filter((elm: any) => elm.visibilityValue === 'SHOW')
            .map((elm: Size) => {
              return { name: elm.name, price: elm.price };
            }),
        };
      }),
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
