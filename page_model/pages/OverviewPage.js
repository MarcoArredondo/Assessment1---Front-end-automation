import {Selector} from "testcafe";

class OverviewPage {
    constructor(){
        this.title = Selector("div.subheader").withExactText("Checkout: Overview");
        this.cartItem = Selector("div.cart_item");
        this.finishButton = Selector("a.btn_action.cart_button");
    }
}

export default new OverviewPage();