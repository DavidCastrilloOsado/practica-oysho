import { Injectable } from '@angular/core';
import {  map } from 'rxjs';
import { Products, Color, Size } from '../../core/models/global-products';
import { PostsService } from '../../core/service/posts.service';

@Injectable({
  providedIn: 'root'
})
export class ListadosService {
  listado: Products[] = [];
  constructor(private _posservice: PostsService) { }
  conexionlistado(id?:number){
     
    if (id) {
     
      this._posservice.getCharacters(id).pipe(
        
        map((data) => {
           
          this.pushDetails(data);
            //console.log('castrillo', data);
        })
        ).subscribe();
    }else {
     

        this._posservice.getCharacters().pipe(
          map((data) => {
            // console.log('castri', data);
            data.map((elm:any)=>this.pushProduct(elm?.bundleProductSummaries));
             console.log('castrillo', data);
          })
          ).subscribe();
      }
    //  console.log('listado', this.listado)
      return this.listado;
    }
    pushProduct(data: any): void { 
      if(data?.length) {
        
        let productElement: Products = {} as Products;
        productElement.id = data[0].id;
        productElement.name = data[0].name;
        productElement.size = data[0].sizeSystem;
        productElement.color= [];
        productElement.color = data[0].detail?.colors.map((elm:any)=>{
          return {'name': elm.name, 
                  'id': elm.id, 
                  'image': elm.image?.url,
                  'sizes': elm.sizes
                  .filter((elm:any)=>elm.visibilityValue === "SHOW")
                  .map((elm:any)=>{return {'name': elm.name, 'price': elm.price};})
        }});
        productElement.reference = data[0].detail?.reference;
        productElement.longDescription = data[0].detail?.longDescription;
        productElement.imagepath = data[0].detail?.xmedia[0].path;
        productElement.idMedia = data[0].detail?.xmedia[0].xmediaItems[0].medias[0].idMedia;
        productElement.set = data[0].detail?.xmedia[0].xmediaItems[0].set;
        this.listado.push(productElement);
      }
    }
    pushDetails(data: any): void { 
      if(data) {
        
        let productElement: Products = {} as Products;
        productElement.id = data.id;
        productElement.name = data.name;
        productElement.size = data.sizeSystem;
        productElement.color = [];
        productElement.color = data.detail?.colors.map((elm:any)=>{
          return {'name': elm.name, 
                  'id': elm.id, 
                  'image': elm.image?.url,
                  'sizes': elm.sizes
                  .filter((elm:any)=>elm.visibilityValue === "SHOW")
                  .map((elm:any)=>{return {'name': elm.name, 'price': elm.price};})
        }});
        productElement.reference = data.detail?.reference;
        productElement.longDescription = data.detail?.longDescription;
        productElement.imagepath = data.detail?.xmedia[0].path;
        productElement.idMedia = data.detail?.xmedia[0].xmediaItems[0].medias[0].idMedia;
        productElement.set = data.detail?.xmedia[0].xmediaItems[0].set;
        this.listado.push(productElement);
      }
    }
  }

