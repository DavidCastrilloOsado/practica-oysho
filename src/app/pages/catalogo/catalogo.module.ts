import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPricePipe } from 'src/app/shared/pipes/filter-price.pipe';
import { SharedModule } from '../../shared/shared.module';
import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';


@NgModule({
  declarations: [
    CatalogoComponent

  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    SharedModule

  ],
  providers: [
    FilterPricePipe,

  ]
})
export class CatalogoModule { }
