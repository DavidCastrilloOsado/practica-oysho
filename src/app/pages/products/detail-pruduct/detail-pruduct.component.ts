import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/core/models/global-products.models';
import { ListService } from 'src/app/core/service/list.service';
import { GLOBAL_URL } from '../../../../environments/environment';

@Component({
  selector: 'app-detail-pruduct',
  templateUrl: './detail-pruduct.component.html',
  styleUrls: ['./detail-pruduct.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product: Products[] = [];
  public urlBreackImage: string = GLOBAL_URL.urlBreackImage;
  public productId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private _ListService: ListService
  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
      this.productGet(this.productId);
    });
  }
  productGet(id: number) {
    this._ListService
      .getDetails(id)
      .subscribe((det: Products) => (this.product = [det]));
  }
}
