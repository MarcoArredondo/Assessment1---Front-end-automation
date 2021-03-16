import {Selector} from "testcafe";
import {CONSTANTS} from "../data/Constants";

class UserInformationPage {
    constructor(){
        this.title = Selector("div.subheader").withExactText(CONSTANTS.TEXT_LOCATORS.USER_INFORMATION_TITLE);
        this.firstName = Selector("input#first-name");
        this.lastName = Selector("input#last-name");
        this.postalCode = Selector("input#postal-code");
        this.cancelButton = Selector("a.cart_cancel_link");
        this.continueButton = Selector("input.btn_primary.cart_button");
        this.firstNameError = Selector("h3").withExactText(CONSTANTS.TEXT_LOCATORS.FIRST_NAME_REQUIRED);
        this.lastNameError = Selector("h3").withExactText(CONSTANTS.TEXT_LOCATORS.LAST_NAME_REQUIRED);
        this.postalCodeError = Selector("h3").withExactText(CONSTANTS.TEXT_LOCATORS.POSTAL_CODE_REQURIED);
    }

    async fillDataAndGotToOverview(t){
        await t.typeText(this.firstName, "John");
        await t.typeText(this.lastName, "Doe");
        await t.typeText(this.postalCode, "33333");
        await t.click(this.continueButton);
    }
}


export default new UserInformationPage();