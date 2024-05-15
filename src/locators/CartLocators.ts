import { Page } from "@playwright/test";

export class CartLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public price = async () => {
        return await this.page.locator("//span[contains(@class,'exito-checkout-io-0-x-paymentButtonTextBold') and contains(text(),'Total')]");
    }

    public lower = async () => {
        return await this.page.locator("//div[@class='exito-checkout-io-0-x-containerDonationInfoDataTitle']");
    }

    public readonly xpathNameInitial: string = "(//*[@class='exito-checkout-io-0-x-itemCartContent'])[";

    public readonly xpathNameFinal: string = "]/descendant::div[5]";

    public readonly xpathQuantyInitial: string = "(//*[@class='exito-checkout-io-0-x-itemCartContent'])[";

    public readonly xpathQuantyFinal: string = "]/descendant::div[8]";

    public readonly xpathPriceInitial: string = "(//div[@data-molecule-product-detail-price-best-price='true'])[";

    public readonly xpathPriceFinal: string = "]";


}