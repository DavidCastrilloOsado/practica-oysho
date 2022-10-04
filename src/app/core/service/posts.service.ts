import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
let URLpost:string;
const baseUrl:string = 'https://www.oysho.com/itxrest/2/catalog/store/64009600/60361121/category/1010466046/product?languageId=-5&appId=1';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private http: HttpClient) { }
  
  getCharacters(id?: number) {
    let URLdetails:string = `https://www.oysho.com/itxrest/2/catalog/store/64009600/60361121/category/1010466046/product/${id}/detail?languageId=-5&appId=1`;
    
    // (id) ? URLpost = URLdetails : URLpost = baseUrl;
    URLpost = id ? URLdetails : baseUrl
    return this.http.get(URLpost).pipe(
      map( (res: any) => {
        if (!res) {
          throw new Error('Value expected!');
        } else {
          // console.log('URL_apy', URLpost);
          let results:any;
          (id) ? results =  res : results =  res.products

              //  console.log('servicio',results)
          return  results;
        }
      }),
      catchError(err => {
        throw new Error(err.message);
      })
    );
  }
}
