import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProductsApy } from '../../core/models/products-apy';
import { GLOBAL_URL } from '../../../environments/environment';
const URL_APY: string = GLOBAL_URL.urlApy;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getCharacters(id?: number):Observable<ProductsApy> {
    let urlDetails: string =
      GLOBAL_URL.urlDetails + id + GLOBAL_URL.urlDetailsProduct;

    let urlPost: string = id ? urlDetails : URL_APY;
    return this.http.get(urlPost).pipe(
      map((res: any) => {
        console.log('any',res)
        let results:ProductsApy;
        results = id ? (results = res) : (results = res.products);
        tap(
          catchError((err) => {
            throw new Error(err.message);
          })
        );
        return results;
      })
    );
  }
}
