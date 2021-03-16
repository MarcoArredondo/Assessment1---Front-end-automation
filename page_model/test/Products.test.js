import ProductsPage from "../pages/ProductsPage";
import LoginPage from "../pages/LoginPage";
import MenuPage from "../pages/MenuPage";
import {CONSTANTS} from "../data/Constants";

fixture("Products features testing").page`https://www.saucedemo.com/`;

test("User can logout from product page", async t => {

    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);

    await t.expect(ProductsPage.productsLabel.exists).ok();

    await t.click(MenuPage.burguerIcon);
    await t.click(MenuPage.logoutItem);
    await t.expect(LoginPage.username.exists).ok();
    await t.expect(LoginPage.password.exists).ok();
});

test("Add a single item to shopping cart", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);
    await t.click(ProductsPage.addToCartButton);
    await t.expect(MenuPage.shopingCartItemsCount.exists).ok();
    await t.expect(MenuPage.shopingCartItemsCount.innerText).eql("1");
});

test("Add all the items to shopping cart", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);  

    for(var i = 0; i<6; i++){
        await t.click(ProductsPage.addToCartButton);
    }
    await t.expect(MenuPage.shopingCartItemsCount.exists).ok();
    await t.expect(MenuPage.shopingCartItemsCount.innerText).eql("6");
});