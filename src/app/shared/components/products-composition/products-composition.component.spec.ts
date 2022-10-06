import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCompositionComponent } from './products-composition.component';

describe('ProductsCompositionComponent', () => {
  let component: ProductsCompositionComponent;
  let fixture: ComponentFixture<ProductsCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCompositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
