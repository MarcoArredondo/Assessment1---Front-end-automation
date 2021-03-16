import {Selector} from "testcafe";

class MenuPage{
    constructor(){
         this.burguerIcon = Selector("#react-burger-menu-btn");
         this.logoutItem = Selector("#logout_sidebar_link");
         this.shoppingCartIcon = Selector("a.shopping_cart_link");
         this.shopingCartItemsCount = Selector("span.fa-layers-counter.shopping_cart_badge");
    }

}

export default new MenuPage();