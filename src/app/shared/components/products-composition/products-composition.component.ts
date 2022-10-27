import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../../core/models/global-products.models';

@Component({
  selector: 'app-products-composition',
  templateUrl: './products-composition.component.html',
  styleUrls: ['./products-composition.component.scss'],
})
export class ProductsCompositionComponent implements OnInit {
  @Input() urlBreackImage: string = '';
  @Input() detail: boolean = false;
  @Input() products: Products[] = [];

  constructor() { }
  ngOnInit(): void { }
}
