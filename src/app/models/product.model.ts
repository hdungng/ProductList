export class Product {
  public name: string;
  public image: string;
  public price: number;
  public quantity: number;

  constructor(name: string, image: string, price: number, quantity: number) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }
}
