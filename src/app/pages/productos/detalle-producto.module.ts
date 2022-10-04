import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleProductoRoutingModule } from './detalle-producto-routing.module';
import { DetalleProductosComponent } from '../productos/detalle-producto/detalle-producto.component'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DetalleProductosComponent
  ],
  imports: [
    CommonModule,
    DetalleProductoRoutingModule,
  ]
})
export class DetalleProductoModule { }
