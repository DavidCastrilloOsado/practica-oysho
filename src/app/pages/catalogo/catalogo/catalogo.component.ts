import { Component, OnInit } from '@angular/core';
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
  public getColorButtons: Products[] = [];
  public isFilterColor: boolean = true;
  constructor(
    private _ListadosService: ListadosService,
    private _short: FilterPricePipe
  ) {}

  ngOnInit() {
    this.listado();
    setTimeout(() => {
      this.GetColorsButtons();
    }, 2000);
  }
  listado() {
    this._ListadosService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
  productOrder(arg: any) {
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
  colorOrder(color: string) {
    if (color === 'ALL-COLORS') {
      return (this.isFilterColor = true);
    }
    this.productsFilterColors = this.products.filter(
      (elm) => elm.productColor === color
    );
    this.isFilterColor = false;
    return this.productsFilterColors;
  }
  GetColorsButtons() {
    localStorage.setItem('PRODUCTS', JSON.stringify(this.products));
    this.getColorButtons = JSON.parse(localStorage.getItem('PRODUCTS')!);
  }
}
