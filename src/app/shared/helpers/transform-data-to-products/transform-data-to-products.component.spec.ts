import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformDataToProductsComponent } from './transform-data-to-products.component';

describe('TransformDataToProductsComponent', () => {
  let component: TransformDataToProductsComponent;
  let fixture: ComponentFixture<TransformDataToProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransformDataToProductsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TransformDataToProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
