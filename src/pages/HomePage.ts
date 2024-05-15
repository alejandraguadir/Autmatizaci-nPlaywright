import { Locator, Page, expect } from "@playwright/test";
import { HomeLocators } from "../locators/homeLocators";

export class HomePage {

    private page: Page;
    private locators: HomeLocators;

    constructor(page: Page) {
        this.page = page
        this.locators = new HomeLocators(page);

    }

    async selectMenu() {
        const menu = await this.locators.menu();
        await expect(menu).toBeVisible();
        await menu.click();
    }

    async selectCategory() {
        const category = await this.locators.category();
        const subcategory = await this.locators.subcategory();       
        await category.click();
        await subcategory.click();
    }

    async clickOnMenu() {
        await this.selectMenu();
        await this.selectCategory();        
        
    }

    
}