import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import {ProductService} from '../../services/product.service';
import {cartProduct} from '../../model/model';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'app-product-description',
    standalone: true,
    templateUrl: './product-description.component.html',
    styleUrl: './product-description.component.css',
    imports: [HeaderComponent,CommonModule],
})
export class ProductDescriptionComponent implements OnInit{
  productId: string | null | number = 0


  constructor(private router: Router, private route: ActivatedRoute, private location: Location,
     private ProductService:ProductService, private CartService :CartService) {
    
  }
  products  = this.ProductService.getAllProducts();
  product :any;

  ngOnInit() {
   this.productId = this.route.snapshot.paramMap.get('id');

   this.product = this.products.find((obj) => {
    return obj.id == this.productId;
  });

  }
  back(){
    this.location.back();
  }

  Addtocart(cartItem:any){
    cartItem['selectedQuantity'] = 1
    this.CartService.addCartItem(cartItem)
    this.router.navigate(['/cart']);

  }


  

}
