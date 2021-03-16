import OverviewPage from "../pages/OverviewPage";
import UserInformationPage from "../pages/UserInformationtPage";
import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import MenuPage from "../pages/MenuPage";
import ConfirmationPage from "../pages/ConfirmationPage";
import {CONSTANTS} from "../data/Constants";


fixture("Overview features tests").page`https://www.saucedemo.com/`;

test("Navigate to overview page", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);
    await ProductsPage.addItemsAndGoToCheckout(6, t);
    await UserInformationPage.fillDataAndGotToOverview(t);
    await t.expect(OverviewPage.title.exists).ok();
});

test("Validate items count", async t => {
    
    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);
    await ProductsPage.addItemsAndGoToCheckout(6, t);
    await UserInformationPage.fillDataAndGotToOverview(t);
    await t.expect(OverviewPage.title.exists).ok();
    const items = await OverviewPage.cartItem.count;
    const itemsInCart = await MenuPage.shopingCartItemsCount.innerText;
    await t.expect(parseInt(itemsInCart)).eql(items);
});

test("Go to confirmation page", async t => {

    LoginPage.login(CONSTANTS.VALID_USER.USERNAME, CONSTANTS.VALID_USER.PASSWORD, t);
    await ProductsPage.addItemsAndGoToCheckout(6, t);
    await UserInformationPage.fillDataAndGotToOverview(t);
    await t.expect(OverviewPage.title.exists).ok();
    await t.click(OverviewPage.finishButton);
    await t.expect(ConfirmationPage.title.exists).ok();
    await t.expect(ConfirmationPage.thanksTitle.exists).ok();
    await t.expect(ConfirmationPage.completeText.exists).ok();
});