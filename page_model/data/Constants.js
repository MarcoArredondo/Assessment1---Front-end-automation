import dotenv from "dotenv";

dotenv.config();

export const CONSTANTS = {
    VALID_USER: {
        USERNAME: process.env.TESTUSERNAME,
        PASSWORD: process.env.TESTPASSWORD
    },
    INVALID_USER: {
        USERNAME: process.env.TESTUSERNAME,
        PASSWORD: process.env.TESTINVALIDPASSWORD
    },
    TEXT_LOCATORS: {
        EMPTY_CREDENTIALS_ERROR_MESSAGE: "Epic sadface: Username is required",
        INVALID_CREDENTIALS_ERROR_MESSAGE: "Epic sadface: Username and password do not match any user in this service",
        SHOPPING_CART_TITLE: "Your Cart",
        CONTINUE_SHOPPING_BUTTON: "CONTINUE SHOPPING",
        CHECKOUT_BUTTON: "CHECKOUT",
        ADD_TO_CART: "ADD TO CART",
        USER_INFORMATION_TITLE:"Checkout: Your Information",
        FIRST_NAME_REQUIRED: "Error: First Name is required",
        LAST_NAME_REQUIRED: "Error: Last Name is required",
        POSTAL_CODE_REQURIED: "Error: Postal Code is required",
        CONFIRMATION_TITLE: "Finish",
        THANKS_TITLE: "THANK YOU FOR YOUR ORDER",
        COMPLETE_TEXT: "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    }
    
}