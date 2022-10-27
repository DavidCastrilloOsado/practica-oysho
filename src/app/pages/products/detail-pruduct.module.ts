import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailComponent } from '../products/detail-pruduct/detail-pruduct.component';
import { DetalleProductoRoutingModule } from './detail-pruduct-routing.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, DetalleProductoRoutingModule, SharedModule],
})
export class DetailProductModule { }
