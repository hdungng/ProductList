import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css'],
})
export class AddProductFormComponent {
  @ViewChild('form') addForm: NgForm;

  constructor(private productService: ProductService) {}

  onSubmit() {
    const product = new Product(
      this.addForm.value.name,
      this.addForm.value.image,
      this.addForm.value.price,
      this.addForm.value.quantity
    );
    this.addForm.reset();

    this.productService.addProduct(product);
  }
}
