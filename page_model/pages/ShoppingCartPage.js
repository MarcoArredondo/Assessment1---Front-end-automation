import {Selector} from "testcafe";
import {CONSTANTS} from "../data/Constants";

class ShoppingCartPage {
    constructor(){
        this.title = Selector("div.subheader").withExactText(CONSTANTS.TEXT_LOCATORS.SHOPPING_CART_TITLE);
        this.continue_shopping_button = Selector("a.btn_secondary").withExactText(CONSTANTS.TEXT_LOCATORS.CONTINUE_SHOPPING_BUTTON);
        this.checkout_button = Selector("a.btn_action.checkout_button").withExactText(CONSTANTS.TEXT_LOCATORS.CHECKOUT_BUTTON);
        this.add_to_cart_buttons = Selector("a.btn_action.checkout_button").withExactText(CONSTANTS.TEXT_LOCATORS.ADD_TO_CART);
    }
}

export default new ShoppingCartPage;
