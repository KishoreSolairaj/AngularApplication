import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import {CartService} from './services/cart.service';
import {ProductService} from './services/product.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, RouterLink, RouterLinkActive],
    providers:[UserService,CartService,ProductService]
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'praticeapplication';

  UserValidate:boolean = true;

  ValidUser(value:boolean){
    this.UserValidate  = Boolean(value);
    this.router.navigate(['/productlist']);
  }
}
