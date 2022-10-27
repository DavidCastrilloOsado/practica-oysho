import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FilterPricePipe } from 'src/app/shared/pipes/filter-price.pipe';
import { SharedModule } from '../../shared/shared.module';
import { catalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './catalogue/catalogue.component';


@NgModule({
  declarations: [
    CatalogueComponent

  ],
  imports: [
    CommonModule,
    catalogueRoutingModule,
    SharedModule

  ],
  providers: [
    FilterPricePipe,

  ]
})
export class catalogueModule { }
