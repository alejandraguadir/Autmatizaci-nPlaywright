import { Page } from "@playwright/test";

export class MailLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public cart = async () => {
        return await this.page.locator("//a[contains(@class,'exito-header-3-x-minicartLink')]");
    }

    public formEmail = async () => {
        return await this.page.getByText("Inicia tu proceso de compraGuardamos tu correo de forma segura para recordar tus");
    }

    public inputEmail = async () => {
        return await this.page.getByPlaceholder('correo@email.com');
    }

}