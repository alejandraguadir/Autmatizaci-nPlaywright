import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { RegisterMail } from '../src/pages/RegisterMail';
import { CartPage } from '../src/pages/CartPage';
import { AddProductsCart} from '../src/pages/addProductsCart';


test('test-purchase', async ({ page }) => {
  await page.goto('https://www.exito.com/');


  const homePage = new HomePage(page)
  await homePage.clickOnMenu();

  const productsPage = new AddProductsCart(page)
  await productsPage.selectProductsCart();

  const registerMail = new RegisterMail(page)
  await registerMail.registerEmail('yoli@gmail.com');

  const cartPage = new CartPage(page)
  await cartPage .DataProductsCart();

  //expect(productsPage.calculatePriceTotal(await productsPage.selectRandomProduct())).toEqual(cartPage.getDataProductCart());


  

});


