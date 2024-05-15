import { Page } from "@playwright/test";
import { ProductLocators } from "../locators/productLocators";
import { generateUniqueRandomNumbers } from "../utils/RandomNumberGenerator";
import { Product } from "../model/Product";
import { extractIntegers } from "../utils/GetNumbers";

export class AddProductsCart {
  private page: Page;
  private locators: ProductLocators;
 

  constructor(page: Page) {
    this.page = page;
    this.locators = new ProductLocators(page);
  }

  // Extraer el total de productos
  async getIndex(): Promise<number> {
    const indexProduct = await this.locators.indexProduct();
    
    const elements = await indexProduct.all();
    const totalElements = elements.length;
    return totalElements;
  }

  async selectIndexProduct(): Promise<number[]> {
    const randomNumbers: number[] = generateUniqueRandomNumbers(1, 12, 5);
    return randomNumbers;
  }

  async selectRandomProduct() {
    const listandomIndex = await this.selectIndexProduct();
    const totalElements = await this.getIndex();
    console.log(`Cantidad total de elementos: ${totalElements}`);
    const NumberOfProductsToPurchase = listandomIndex.length

    const parteBase = this.locators.xpathProductInicial;
    const parteFinal = this.locators.xpathProductFinal;
    const productList: Product[] = [];

    for (let i = 0; i < NumberOfProductsToPurchase; i++) {

      const xpathProduct = `${parteBase}${listandomIndex[i]}${parteFinal}`;
      await this.page.locator(xpathProduct).click();
      (await this.locators.buttonAddCart()).click();

      const randomClicks = Math.floor(Math.random() * 9) + 1;
      for (let j = 0; j < randomClicks; j++) {
        await (await this.locators.buttonAddUnits()).click();// "Agregar unidades" múltiples veces
      }

      const expectedName = await (await this.locators.productName()).innerText();
      const expectedPriceTex = await (await this.locators.productPriceText()).innerText();
      const expectedUnitsTex = await (await this.locators.productUnitsText()).innerText();

      const expectedPrice = extractIntegers(expectedPriceTex);
      const expectedUnits = extractIntegers(expectedUnitsTex) / 100;
      const expectedPriceTotalProduct = expectedPrice * expectedUnits


      const product = new Product(expectedName, expectedPriceTotalProduct, expectedUnits);

      productList.push(product);


      (await this.locators.continueShopping()).click();

    }

    this.calculatePriceTotal(productList);
    console.log('Lista de productos:', productList);
    return productList;

  }

  calculatePriceTotal(productList: Product[]) {
    const expectedPriceTotal = productList.reduce((total: number, product: Product) => total + product.getPrice(), 0);
    console.log('Precio Total de los Productos:', expectedPriceTotal);
    return expectedPriceTotal;

    
  }

  public async selectProductsCart() {
    await this.selectRandomProduct();
    
  }

}
