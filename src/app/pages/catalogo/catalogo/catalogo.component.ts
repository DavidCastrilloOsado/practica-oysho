import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { GLOBAL_URL } from '../../../../environments/environment';
import { Products } from '../../../core/models/global-products';
import { ListadosService } from '../../../core/service/listados.service';
import { FilterPricePipe } from '../../../shared/pipes/filter-price.pipe';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  public urlBreackImage: string = GLOBAL_URL.urlBreackImage;
  public products: Products[] = [];
  public filteredProducts: Products[] = [];
  public productsFilterColors: Products[] = [];
  public getColorButtons: string[] = [];
  public isFilterColor: boolean = true;
  constructor(
    private _ListadosService: ListadosService,
    private _short: FilterPricePipe
  ) {}

  ngOnInit() {
    this.listado();
  }
  listado() {
    this._ListadosService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.GetColorsButtons();
    });
  }
  productOrder(arg: string): Array<Products> {
    if (this.isFilterColor) {
      this.filteredProducts = this._short.transform(
        this.products,
        arg,
        'price'
      );
      return (this.products = this.filteredProducts);
    } else {
      this.filteredProducts = this._short.transform(
        this.productsFilterColors,
        arg,
        'price'
      );
      return (this.productsFilterColors = this.filteredProducts);
    }
  }
  colorOrder(color: string): Array<Products> {
    if (color === 'ALL-COLORS') {
      this.returnAllColors();
    } else {
      this.productsFilterColors = this.products.filter(
        (elm) => elm.productColor === color
      );
      this.isFilterColor = false;
      console.log('fltroscolores', this.productsFilterColors);
    }
    return this.productsFilterColors;
  }
  returnAllColors():boolean {
    return (this.isFilterColor = true);
  }
  GetColorsButtons() {
    this.getColorButtons = _.uniq(
      this.products
        .map((color) => color.color.map((color) => color.name))
        .flat(1)
    );
  }
}
