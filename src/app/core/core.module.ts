import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListService } from "./service/list.service";
import { PostService } from "./service/posts.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [PostService, ListService],
})
export class CoreModule { }
