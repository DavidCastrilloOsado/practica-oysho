import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsCompositionComponent } from './components/products-composition/products-composition.component';
import { ImgFallbackDirective } from './directives/image-fix.directive';
import { FilterPricePipe } from './pipes/filter-price.pipe';
import { UniquePipe } from './pipes/filter-unique.pipe';

@NgModule({
  declarations: [
    ImgFallbackDirective,
    ProductsCompositionComponent,
    FilterPricePipe,
    UniquePipe
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ImgFallbackDirective,
    ProductsCompositionComponent,
    FilterPricePipe,
    UniquePipe
  ],
})
export class SharedModule {}
