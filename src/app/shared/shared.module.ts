import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsFilerColorsComponent } from './components/buttons-filer-colors/buttons-filer-colors.component';
import { ProductsCompositionComponent } from './components/products-composition/products-composition.component';
import { ImgFallbackDirective } from './directives/image-fix.directive';
import { FilterPricePipe } from './pipes/filter-price.pipe';
import { FormatedPricePipe } from './pipes/formated-price.pipe';
import { RemoveSpacesPipe } from './pipes/remove-spaces.pipe';

@NgModule({
  declarations: [
    ImgFallbackDirective,
    ProductsCompositionComponent,
    FilterPricePipe,
    FormatedPricePipe,
    RemoveSpacesPipe,
    ButtonsFilerColorsComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ImgFallbackDirective,
    ProductsCompositionComponent,
    FilterPricePipe,
    FormatedPricePipe,
    RemoveSpacesPipe,
    ButtonsFilerColorsComponent,
  ],
})
export class SharedModule { }
