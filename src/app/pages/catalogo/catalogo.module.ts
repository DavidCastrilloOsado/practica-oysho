import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {PostsService} from '../../core/service/posts.service';//
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CatalogoComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    SharedModule
  ]
})
export class CatalogoModule { }
