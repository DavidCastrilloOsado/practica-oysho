import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from "./service/posts.service";
import { ListadosService } from "./service/listados.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PostsService,
    ListadosService
  ]

})
export class CoreModule { }
