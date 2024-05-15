import { Page } from "@playwright/test";

export class HomeLocators {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public menu = async () => {
        return await this.page.locator("//*[@id='category-menu']");
    }

    public category = async () => {
        return await this.page.locator("(//*[@id='undefined-nivel2-Dormitorio'])[1]");
    }

    public subcategory = async () => {
        return await this.page.getByRole('link', { name: 'Cabeceros' });;
    }





}