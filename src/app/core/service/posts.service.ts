import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GLOBAL_URL } from '../../../environments/environment';
import { ProductsApy, RestApy } from '../../core/models/products-apy.models';
const URL_APY: string = GLOBAL_URL.urlApy;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) { }
  getProductsCatalogue(): Observable<ProductsApy[]> {
    return this.http.get<RestApy>(URL_APY).pipe(
      map((res: RestApy) => {
        tap(
          catchError((err) => {
            throw new Error(err.message);
          })
        );
        return res.products;
      })
    );
  }

  getProductsDetails(id?: number): Observable<ProductsApy> {
    let urlDetails: string = `${GLOBAL_URL.urlDetails}${id}/detail?languageId=-5&appId=1`;
    return this.http.get<ProductsApy>(urlDetails).pipe(
      map((res: ProductsApy) => {
        tap(
          catchError((err) => {
            throw new Error(err.message);
          })
        );
        return res;
      })
    );
  }
}
