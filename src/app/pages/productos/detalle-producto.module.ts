import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetalleProductosComponent } from '../productos/detalle-producto/detalle-producto.component';
import { DetalleProductoRoutingModule } from './detalle-producto-routing.module';

@NgModule({
  declarations: [DetalleProductosComponent],
  imports: [CommonModule, DetalleProductoRoutingModule, SharedModule],
})
export class DetalleProductoModule {}
