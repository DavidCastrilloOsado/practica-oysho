import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListadosService } from './service/listados.service';
import { PostsService } from './service/posts.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [PostsService, ListadosService],
})
export class CoreModule {}
