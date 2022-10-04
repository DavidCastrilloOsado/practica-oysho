import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color, Products } from 'src/app/core/models/global-products';
import { ListadosService } from 'src/app/core/service/listados.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductosComponent implements OnInit {
  producto:Products[] = [];
  colors:Color[] = [];
  baseUrlImage :string = '';
  color: any;
  constructor(private route: ActivatedRoute,
    private _ListadosService: ListadosService) { }
    public productId: any;

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.productGet(this.productId);
    });
     console.log('id', this.productId)
  }
  productGet(id:any) {
    let listados = this._ListadosService.conexionlistado(id);
  
    this.producto = listados;
  
    this.baseUrlImage = `https://static.oysho.net/6/photos2/`;
    
    
    console.log('listado detalle', this.producto);
  }
}