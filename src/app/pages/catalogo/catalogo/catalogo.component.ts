import { Component, OnInit} from '@angular/core';
import { Products, Color, Name } from '../../../core/models/global-products';
import {ListadosService } from '../../../core/service/listados.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})

export class CatalogoComponent implements OnInit {
  productos:Products[] = [];
  colors:Color[] = [];
  baseUrlImage :string = '';
  color: any;
  constructor(private _ListadosService: ListadosService) {}
  
  ngOnInit() {
    this.listado();
  }
  listado () {
  let listados = this._ListadosService.conexionlistado();
  
  this.productos = listados;

  this.baseUrlImage = `https://static.oysho.net/6/photos2/`;
  
  
  console.log('listado', this.productos);
}
}
