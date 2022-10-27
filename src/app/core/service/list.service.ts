import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TransformDataToProductsComponent } from 'src/app/shared/helpers/transform-data-to-products/transform-data-to-products.component';
import { Products } from '../models/global-products.models';
import { ProductsApy } from '../models/products-apy.models';
import { PostService } from './posts.service';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(
    private _postservice: PostService,
    private _transformDataToProduct: TransformDataToProductsComponent
  ) { }
  getDetails(id: number): Observable<Products> {
    return this._postservice.getProductsDetails(id).pipe(
      map((data: ProductsApy) => {
        return this._transformDataToProduct.TransformDataToProducts(data);
      })
    );
  }
  getAllProducts(): Observable<Products[]> {
    return this._postservice.getProductsCatalogue().pipe(
      map((data: ProductsApy[]) => {
        return data
          .filter((elm: ProductsApy) => elm.bundleProductSummaries.length)
          .map((elm: ProductsApy) => {
            return this._transformDataToProduct.TransformDataToProducts(
              elm?.bundleProductSummaries[0]
            );
          });
      })
    );
  }
}
