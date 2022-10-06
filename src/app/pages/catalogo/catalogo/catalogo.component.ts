import { Component, OnInit } from '@angular/core';
import { Products} from '../../../core/models/global-products';
import { ListadosService } from '../../../core/service/listados.service';
import { GLOBAL_URL } from '../../../../environments/environment';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  public urlBreackImage:string = GLOBAL_URL.urlBreackImage;
  public products: Products[] = [];
  constructor(private _ListadosService: ListadosService) {}
  
  ngOnInit() {
    this.listado();
  }
  listado() {
    this._ListadosService
      .getAllProducts()
      .subscribe(data => 
        this.products = data
      );
  }
}
