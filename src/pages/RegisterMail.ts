import { Locator, Page } from "@playwright/test";
import { MailLocators } from "../locators/MailLocators";

export class RegisterMail {
    private page: Page;
    private locators: MailLocators;

    constructor(page: Page) {
        this.page = page;
        this.locators = new MailLocators(page);
    }

    async goForm() {
        await (await this.locators.cart()).click();
        await (await this.locators.formEmail()).click();
        await (await this.locators.inputEmail()).click();
    }

    private async writeMail(email: string) {
        await (await this.locators.inputEmail()).fill(email);
    }

    private async sendMail() {
        await (await this.locators.inputEmail()).press('Tab');
        await (await this.locators.inputEmail()).press('Enter');
    }

    async registerEmail(email: string) {

        await this.goForm();
        await this.writeMail(email);
        await this.sendMail();



    }





  

  
}