import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostStylingDirective } from './directives/post-styling.directive';
import { ImgFallbackDirective } from './directives/image-fix.directive';



@NgModule({
  declarations: [
    PostStylingDirective,
    ImgFallbackDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
