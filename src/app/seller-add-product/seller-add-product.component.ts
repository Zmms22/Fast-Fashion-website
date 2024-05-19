import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
  

})
export class SellerAddProductComponent implements OnInit {
  AddProductMessage: string | undefined;
  constructor(private product: ProductService) {}

  ngOnInit(): void {}

  submit(data: product): void {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.AddProductMessage = 'Product is Successfully added';
      }
      setTimeout(() => (this.AddProductMessage = undefined), 3000);
    });
  }
}
