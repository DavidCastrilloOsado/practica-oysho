import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/core/models/global-products';
import { ListadosService } from 'src/app/core/service/listados.service';
import { GLOBAL_URL } from '../../../../environments/environment';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductosComponent implements OnInit {
  public product: Products[] = [];
  public urlBreackImage: string = GLOBAL_URL.urlBreackImage;
  public productId: any;
  constructor(
    private route: ActivatedRoute,
    private _ListadosService: ListadosService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.productGet(this.productId);
    });
  }
  productGet(id: number) {
    this._ListadosService
      .getDetails(id)
      .subscribe((det) => (this.product = [det]));
  }
}
