import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import { HighlightDirective } from '../../../customDerectives/highlight.directive';
import {ProductService} from '../../../services/product.service';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink, RouterLinkActive, RouterOutlet,HighlightDirective],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers:[ProductService]
})
export class ProductListComponent {
 
  constructor(private router: Router, private ProductService:ProductService) {
    
  }
  products  = this.ProductService.getAllProducts();
  test:Boolean = false;
  @Input()
  SearchText:string = "";
  @Input()
  SearchSelect:string="";
  



}
