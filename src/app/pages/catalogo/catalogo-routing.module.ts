import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent} from './catalogo/catalogo.component'

const routes: Routes = [
  {
    path: '',pathMatch: `full`, component: CatalogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
