import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../../../core/models/global-products';

@Component({
  selector: 'app-products-composition',
  templateUrl: './products-composition.component.html',
  styleUrls: ['./products-composition.component.scss'],
})
export class ProductsCompositionComponent implements OnInit {
  @Input() urlBreackImage: string = '';
  @Input() detail: boolean = false;
  @Input() isFilterColor: boolean = true;
  @Input() position: number = 0;
  @Input() products: Products[] = [];
  
  constructor() {}
  ngOnInit(): void {}
}
