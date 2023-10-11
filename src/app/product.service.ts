import { Product } from './models/product.model';

export class ProductService {
  products: Product[] = [
    new Product(
      'PASSION MOUSSE CHEESECAKE',
      'https://savourebakery.com/vnt_upload/product/12_2022/thumbs/370_fw__passion-mousse-cheesecake_1.jpg',
      200,
      20
    ),
    new Product(
      'RED VELVET MOUSSE CHEESECAKE',
      'https://savourebakery.com/vnt_upload/product/12_2022/thumbs/370_fw__red-velvet-mousse-cheesecake_1.jpg',
      200,
      20
    ),
    new Product(
      'BÁNH KEM THƠM',
      'https://savourebakery.com/vnt_upload/product/10_2021/z2844825862544_e70cb30de3db1d6bcb97c5f746049317.jpg',
      240,
      20
    ),
    new Product(
      'BÁNH KEM TIRAMISU TRÁI TIM',
      'https://savourebakery.com/vnt_upload/product/10_2021/z2844825893907_8ea0f38ecde618442670421a31a9527b.jpg',
      290,
      20
    ),
    new Product(
      'BÁNH KEM BẮP',
      'https://savourebakery.com/vnt_upload/product/10_2021/z2844825842414_0fe8ffd7aa0338fca7f3a9e6a0251edc.jpg',
      290,
      20
    ),
  ];

  addProduct(product: Product) {
    this.products.push(product);
  }
}
