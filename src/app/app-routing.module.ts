import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `catalogue`,
    loadChildren: () =>
      import(`./pages/catalogue/catalogue.module`).then((m) => m.catalogueModule),
  },
  {
    path: `detail-pruduct/:id`,
    loadChildren: () =>
      import(`./pages/products/detail-pruduct.module`).then(
        (m) => m.DetailProductModule
      ),
  },
  {
    path: ``,
    redirectTo: `catalogue/`,
    pathMatch: `full`,
  },
  {
    path: `**`,
    redirectTo: `catalogue`,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
