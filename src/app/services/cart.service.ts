import { cartProduct } from '../model/model';

export class CartService {
    cartItems: cartProduct[] = [];

    getCartItems() {
        return this.cartItems;
    }

    addCartItem(cartItem: cartProduct) {
        let count = 0;
        if (this.cartItems.length == 0) {
            this.cartItems.push(cartItem)
        } else {

            this.cartItems.find((obj) => {
                if (obj.id == cartItem.id) {
                    count++
                }
            });
            if (count == 0) {
                this.cartItems.push(cartItem)
            }
        }
    }

    increaseSelectQuantity(id: number) {
        this.cartItems.find((obj) => {
            if (obj.id == id) {
                obj.selectedQuantity += 1

            }
        });

    }

    decreaseSelectQuantity(id: number) {
        this.cartItems.find((obj) => {
            if (obj.id == id) {
                obj.selectedQuantity -= 1
            }
        });
    }

    RemoveProduct(id: number) {
        let index = this.cartItems.findIndex(obj => obj.id === id);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        }
    }

    OrderPlaced(){
        this.cartItems.splice(0, this.cartItems.length);
    }

    
}