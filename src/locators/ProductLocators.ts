import { Page } from "@playwright/test";

export class ProductLocators {
      private page: Page;

      constructor(page: Page) {
            this.page = page;
      }

      public indexProduct = async () => {
            return await this.page.locator("//div[contains(@class,'exito-vtex-components-4-x-buyButton productSummaryBuyButtonProductRich')]");
      }


      public buttonAddCart = async () => {
            return await this.page.locator("//*[@class='exito-vtex-components-4-x-mainBuyButton']");
      }

      public buttonAddUnits = async () => {
            return await this.page.locator("//span[contains(@class,'product-details-exito-vtex-components-buy-button-manager-more')]//*[name()='svg']");
      }

      public productName = async () => {
            return await this.page.locator("div[role='presentation'] div:nth-child(1) h3:nth-child(1) span:nth-child(1)");
      }

      public productPriceText = async () => {
            return await this.page.locator("div[class='w-100 center pt2 pb5'] div[class='exito-vtex-components-4-x-selling-price flex items-center '] span[class='exito-vtex-components-4-x-currencyContainer']");
      }

      public productUnitsText = async () => {
            return await this.page.locator("//div[contains(@class,'exito-vtex-components-4-x-stepperContainerQty')]");
      }

      public continueShopping = async () => {
            return await this.page.locator("//p[contains(@class,'exito-vtex-components-4-x-continue') and contains(text(),'Continuar comprando')]");
      }

      public readonly xpathProductInicial: string = "//*[@id='gallery-layout-container']/div[";
      
      public readonly xpathProductFinal: string = "]/section/a/article/div[2]/div[2]/div/div/div/div[2]/div/div/div[2]/div/div/div/div";



}