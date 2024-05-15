export class Product {
  private name: string;
  private price: number;
  private amount: number;

  constructor(name: string, price: number, amount: number) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getPrice(): number {
    return this.price;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getAmount(): number {
    return this.amount;
  }

  setAmount(amount: number): void {
    this.amount = amount;
  }
}