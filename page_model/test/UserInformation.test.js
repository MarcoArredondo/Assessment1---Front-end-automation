import UserInformationPage from "../pages/UserInformationtPage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import MenuPage from "../pages/MenuPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import {CONSTANTS} from "../data/Constants";

fixture("User information features tests").page`https://www.saucedemo.com/`;

test("Firstname is required", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);
    
    await ProductsPage.addItemsAndGoToCheckout(6, t);
    await t.expect(UserInformationPage.title.exists).ok();
    await t.click(UserInformationPage.continueButton);
    await t.expect(UserInformationPage.firstNameError.exists).ok();
});

test("Lastname is required", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);
    
    await ProductsPage.addItemsAndGoToCheckout(6, t);
    await t.expect(UserInformationPage.title.exists).ok();
    await t.typeText(UserInformationPage.firstName, "John");
    await t.click(UserInformationPage.continueButton);
    await t.expect(UserInformationPage.lastNameError.exists).ok();
});

test("Postal code is required", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);
    
    await ProductsPage.addItemsAndGoToCheckout(6, t);
    await t.expect(UserInformationPage.title.exists).ok();
    await t.typeText(UserInformationPage.firstName, "John");
    await t.typeText(UserInformationPage.lastName, "Doe");
    await t.click(UserInformationPage.continueButton);
    await t.expect(UserInformationPage.postalCodeError.exists).ok();
});