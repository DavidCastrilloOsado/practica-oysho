import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GLOBAL_URL } from '../../../environments/environment';
const URL_APY: string = GLOBAL_URL.urlApy;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getCharacters(id?: number) {
    let urlDetails: string =
      GLOBAL_URL.urlDetails + id + GLOBAL_URL.urlDetailsProduct;

    let urlPost: string = id ? urlDetails : URL_APY;
    return this.http.get(urlPost).pipe(
      map((res: any) => {
        let results: string;
        results = (id) ? results = res  : results = res.products;
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
