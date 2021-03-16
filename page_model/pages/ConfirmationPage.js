import {Selector} from "testcafe";
import {CONSTANTS, COSNTANTS} from "../data/Constants";

class ConfirmationPage {
    constructor(){
        this.title = Selector("div.subheader").withExactText(CONSTANTS.TEXT_LOCATORS.CONFIRMATION_TITLE);
        this.thanksTitle = Selector("h2.complete-header").withExactText(CONSTANTS.TEXT_LOCATORS.THANKS_TITLE);
        this.completeText = Selector("div.complete-text").withExactText(CONSTANTS.TEXT_LOCATORS.COMPLETE_TEXT);
    }
}

export default new ConfirmationPage();