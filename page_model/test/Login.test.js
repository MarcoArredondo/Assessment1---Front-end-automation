import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import {CONSTANTS} from "../data/Constants";

fixture("Login feature testing").page`https://www.saucedemo.com/`;

test("User can login with valid credentials", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);

    await t.expect(ProductsPage.productsLabel.exists).ok();
});

test("User cannot login with invalid credentials", async t => {

    LoginPage.login(CONSTANTS.INVALID_USER.USERNAME, CONSTANTS.INVALID_USER.PASSWORD, t);

    await t.expect(LoginPage.badCredentialsErrorMessage.exists).ok();
});

test("User cannot login with empty credentials", async t => {

    await t.click(LoginPage.loginButton);
    await t.expect(LoginPage.emptyCredentialsErrorMessage.exists).ok();
});
