import { Page, expect } from "@playwright/test";
import { CartLocators } from "../locators/CartLocators";
import { extractIntegers } from "../utils/GetNumbers";
import { Product } from "../model/Product";


export class CartPage {
  private page: Page;
  private locators: CartLocators;


  constructor(page: Page) {
    this.page = page;
    this.locators = new CartLocators(page);

  }


  public async getPriceTotal() {
    const priceTotalText = await (await this.locators.price()).innerText();
    const priceTotal = extractIntegers(priceTotalText);
    console.log('Precio total:', priceTotal);
    return priceTotal

  }

  public async getDataProductCart() {

    const baseNameInitial = this.locators.xpathNameInitial;
    const baseNameFinal = this.locators.xpathNameFinal;

    const basePriceInitial = this.locators.xpathPriceInitial;
    const basePriceFinal = this.locators.xpathPriceFinal;

    const baseQuantyInitial = this.locators.xpathQuantyInitial;
    const baseQuantyFinal = this.locators.xpathQuantyFinal;


    const productListCart: Product[] = []

    for (let i = 1; i < 6; i++) {
      const xpathName = `${baseNameInitial}${[i]}${baseNameFinal}`;
      const xpathPrice = `${basePriceInitial}${[i]}${basePriceFinal}`;
      const xpathQuanty = `${baseQuantyInitial}${[i]}${baseQuantyFinal}`;

      const actualName = await this.page.locator(xpathName).innerText();
      const priceText = await this.page.locator(xpathPrice).innerText();
      const quantyText = await this.page.locator(xpathQuanty).innerText();

      const actualPrice = extractIntegers(priceText);
      const actualQuanty = extractIntegers(quantyText);

      const product = new Product(actualName, actualPrice, actualQuanty);
      productListCart.push(product);

    }

    console.log('Lista de productos actual:', productListCart);
    return productListCart;

  }

  public async DataProductsCart() {
    await this.getPriceTotal();
    await this.getDataProductCart();



  }
}