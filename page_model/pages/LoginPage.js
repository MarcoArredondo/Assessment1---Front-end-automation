import {Selector} from 'testcafe';
import {CONSTANTS} from "../data/Constants";

class LoginPage {
    constructor(){
        this.username = Selector("#user-name");
        this.password = Selector("#password");
        this.loginButton = Selector("#login-button");  
        this.emptyCredentialsErrorMessage = Selector("h3").withExactText(CONSTANTS.TEXT_LOCATORS.EMPTY_CREDENTIALS_ERROR_MESSAGE);      
        this.badCredentialsErrorMessage = Selector("h3").withExactText(CONSTANTS.TEXT_LOCATORS.INVALID_CREDENTIALS_ERROR_MESSAGE);      
    }

    async login(username, password, t){
        await t
        .typeText(this.username, username)
        .typeText(this.password, password)
        .click(this.loginButton);
    }
}

export default new LoginPage();