import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../../core/models/global-products';

@Component({
  selector: 'app-products-composition',
  templateUrl: './products-composition.component.html',
  styleUrls: ['./products-composition.component.scss'],
})
export class ProductsCompositionComponent implements OnInit {
  @Input() urlBreackImage: string = '';
  @Input() detail: boolean = false;
  @Input() product: Products[] = [
    {
      id: 0,
      urlImg: '',
      name: '',
      color: [],
    },
  ];
  constructor() {}

  ngOnInit(): void {
  }
}
