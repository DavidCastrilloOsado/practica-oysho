
import { Component, OnInit } from '@angular/core';
import { GLOBAL_URL } from '../../../../environments/environment';
import { Products } from '../../../core/models/global-products.models';
import { ListService } from '../../../core/service/list.service';
import { FilterPricePipe } from '../../../shared/pipes/filter-price.pipe';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  public urlBreackImage: string = GLOBAL_URL.urlBreackImage;
  public products: Products[] = [];
  public productsList: Products[] = [];
  public isFilterColor: boolean = false;
  public visibleFilterPrice: boolean = false;

  constructor(
    private _ListService: ListService,
    private _short: FilterPricePipe
  ) { }
  ngOnInit() {
    this.generateListProducts();
  }
  generateListProducts(): void {
    this._ListService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.productsList = this.products;
    });
  }
  priceProductOrder(arg: string): Array<Products> {
    if (!this.isFilterColor) {
      let filteredProducts = this._short.transform(this.products, arg, 'price');
      this.toggleClassPrice();
      return (this.productsList = filteredProducts);
    } else {
      let filteredProducts = this._short.transform(
        this.productsList,
        arg,
        'price'
      );
      this.toggleClassPrice();
      return (this.productsList = filteredProducts);
    }
  }
  setProducts($products: Products[]): Array<Products> {
    this.isFilterColor = true;
    return (this.productsList = $products);
  }
  toggleClassPrice(): void {
    this.visibleFilterPrice = !this.visibleFilterPrice;
  }
}
