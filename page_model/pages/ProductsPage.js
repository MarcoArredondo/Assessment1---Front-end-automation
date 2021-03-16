import {Selector} from "testcafe";
import MenuPage from "../pages/MenuPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";

class ProductsPage {
    constructor(){
        this.productsLabel = Selector(".product_label");    
        this.addToCartButton = Selector("button.btn_primary.btn_inventory");   
    }

    async addItemsAndGoToCheckout(limit, t){
        const itemsCount = Math.random() * (limit - 1) + 1;
        for(var i = 0; i<itemsCount; i++){
            await t.click(this.addToCartButton);
        }
        
        await t.expect(MenuPage.shopingCartItemsCount.exists).ok();
        await t.click(MenuPage.shoppingCartIcon);
        await t.expect(ShoppingCartPage.title.exists).ok();
        await t.click(ShoppingCartPage.checkout_button);
    }
}

export default new ProductsPage();