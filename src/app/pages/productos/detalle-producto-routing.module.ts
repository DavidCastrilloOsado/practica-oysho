import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetalleProductosComponent} from './detalle-producto/detalle-producto.component'

const routes: Routes = [
  {
    path: '', component: DetalleProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleProductoRoutingModule { }
