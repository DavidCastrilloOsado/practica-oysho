import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/core/models/global-products.models';
import { ListService } from 'src/app/core/service/list.service';

@Component({
  selector: 'app-buttons-filer-colors',
  templateUrl: './buttons-filer-colors.component.html',
  styleUrls: ['./buttons-filer-colors.component.scss'],
})
export class ButtonsFilerColorsComponent implements OnInit {
  public visibleFilterColors: boolean = false;
  public isFilterColor: boolean = false;
  public getColorButtons: string[] = [];
  public productsList: Products[] = [];
  public products: Products[] = [];
  @Output() public emitProducts = new EventEmitter<Array<Products>>();
  constructor(private _ListService: ListService) { }

  ngOnInit() {
    this.generateListProducts();
  }
  generateListProducts() {
    this._ListService.getAllProducts().subscribe((data) => {
      this.products = data;
      this.productsList = this.products;
      this.getColorsButtons();
    });
  }
  toggleClassFilters() {
    this.visibleFilterColors = !this.visibleFilterColors;
  }
  colorOrder(color: string): void {
    if (color === 'ALL-COLORS') {
      this.visibleFilterColors = false;
      this.isFilterColor = false;
      this.productsList = this.products;
      this.emitProducts.emit(this.productsList);
    } else {
      this.productsList = this.products.filter(
        (elm) => elm.productColor === color
      );
      this.visibleFilterColors = false;
      this.isFilterColor = true;
    }
    this.emitProducts.emit(this.productsList);
  }
  getColorsButtons() {
    this.getColorButtons = [
      ...new Set(
        this.products
          .map((color) => color.color.map((color) => color.name))
          .flat(1)
      ),
    ];
  }
}
