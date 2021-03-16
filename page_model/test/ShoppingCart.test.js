import ShoppingCartPage from "../pages/ShoppingCartPage";
import MenuPage from "../pages/MenuPage";
import LoginPage from "../pages/LoginPage";
import {CONSTANTS} from "../data/Constants";

fixture("Products features testing").page`https://www.saucedemo.com/`;

test("User can navigate to shopping cart page", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);

    await t.click(MenuPage.shoppingCartIcon);
    
    await t.expect(ShoppingCartPage.title.exists).ok();
    await t.expect(ShoppingCartPage.continue_shopping_button.exists).ok();;
});
