import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `catalogo`, pathMatch: `full`, loadChildren: () => 
    import(`./pages/catalogo/catalogo.module`).then(m => m.CatalogoModule)
  },
  {
    path: `detalle-producto/:id`, pathMatch: `full`, loadChildren: () =>
    import(`./pages/productos/detalle-producto.module`).then(m => m.DetalleProductoModule)
  },
  {
    path: ``, redirectTo: `catalogo/`, pathMatch: `full`
  },
  {
    path: `**`,
    redirectTo: `catalogo`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
