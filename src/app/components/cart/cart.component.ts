import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { cartProduct } from '../../model/model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  imports: [CommonModule, FormsModule, HeaderComponent, RouterLink, RouterLinkActive, RouterOutlet]
})
export class CartComponent implements OnInit {
  cartProducts: cartProduct[] = [];
  CartQuantity: number = 0;
  CartPrice: number = 0;
  PlacedOrderPopup:boolean = false;
  constructor(private CartService: CartService, private Router: Router, private location: Location) { }
  ngOnInit() {
    this.cartProducts = this.CartService.getCartItems()
    this.cartProducts.forEach(item => {
      this.CartQuantity = item.selectedQuantity + this.CartQuantity
      this.CartPrice = item.price + this.CartPrice
    });
  }

  IncreaseProduct(id: number, price: number, quantity: number, selectedQuantity: number) {
    if (quantity > selectedQuantity && selectedQuantity <= 4) {
      this.CartPrice = this.CartPrice + price;
      this.CartService.increaseSelectQuantity(id)
      this.CartQuantity = this.CartQuantity + 1;
    } else {
      alert("Maximum Quantity reached")
    }

  }

  DecreaseProduct(id: number, price: number, selectedQuantity: number) {
    if (selectedQuantity > 1) {
      this.CartPrice = this.CartPrice - price;
      this.CartService.decreaseSelectQuantity(id)
      this.CartQuantity = this.CartQuantity - 1;
    } else {
      alert("Minimum Quantity reached")
    }

  }
  back() {
    this.location.back();
  }
  RemoveProduct(id: number, price: number, selectedQuantity: number) {
    const result = window.confirm('Are you sure want to remove product from the cart?');
    if (result) {
      this.CartService.RemoveProduct(id)
      this.CartQuantity = this.CartQuantity - selectedQuantity;
      this.CartPrice = this.CartPrice - (price*selectedQuantity);
    } else {
      console.log('User clicked Cancel');
    }

  }

  OrderPlaced(){
    const result = window.confirm('Are you sure want to Place order?');
    if (result) {
      this.CartService.OrderPlaced();
      this.PlacedOrderPopup = true;
    } else {
      console.log('User clicked Cancel');
    }

  }

  OrderSucessfulPop(){
    this.PlacedOrderPopup=false;
    this.Router.navigate(['/productlist']);
    
  }

}
