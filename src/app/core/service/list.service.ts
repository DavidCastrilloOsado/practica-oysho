import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TransformDataToProductsHelper } from  '../../shared/helpers/transform-data-to-products/transform-data-to-products.component';
import { Products } from '../models/global-products.models';
import { ProductsApy } from '../models/products-apy.models';
import { PostService } from './posts.service';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(
    private _postservice: PostService
  ) { }
  getDetails(id: number): Observable<Products> {
    return this._postservice.getProductsDetails(id).pipe(
      map((data: ProductsApy) => {
        return TransformDataToProductsHelper.transformDataToProducts(data);
      })
    );
  }
  getAllProducts(): Observable<Products[]> {
    return this._postservice.getProductsCatalogue().pipe(
      map((data: ProductsApy[]) => {
        return data
          .filter((elm: ProductsApy) => elm.bundleProductSummaries.length)
          .map((elm: ProductsApy) => {
            return TransformDataToProductsHelper.transformDataToProducts(
              elm?.bundleProductSummaries[0]
            );
          });
      })
    );
  }
}
