import { CartItem } from "./cart-item.model";
import { MenuItem } from "../menu-item/menuItem.model";

export class ShoppingCartService {
    items: CartItem[] = []

    clear(){
        this.items = []
    }

    addItem(item: MenuItem){
        let foundItem = this.items.find(i => i.menuItem.id === item.id);

        if(foundItem){
            foundItem.quantity = foundItem.quantity + 1
        }
        else{
            this.items.push(new CartItem(item))
        }
    }

    removeItem(item: CartItem){
        this.items.splice(this.items.indexOf(item), 1)
    }

    sum() : number{
        return 0
    }
}