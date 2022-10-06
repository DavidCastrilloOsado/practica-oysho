import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgFallbackDirective } from './directives/image-fix.directive';
import { ProductsCompositionComponent } from './components/products-composition/products-composition.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ImgFallbackDirective,
    ProductsCompositionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgFallbackDirective,
    ProductsCompositionComponent,
    RouterModule
  ]
})
export class SharedModule { }
