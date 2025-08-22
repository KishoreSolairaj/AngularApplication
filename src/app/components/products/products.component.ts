import { Component,HostListener,Inject, Output, PLATFORM_ID, EventEmitter } from '@angular/core';
import { FilterComponent } from "./filter/filter.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { SimplefilterComponent } from "./simplefilter/simplefilter.component";
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [FilterComponent, ProductListComponent, HeaderComponent, SimplefilterComponent,RouterLink, RouterLinkActive, RouterOutlet]
})
export class ProductsComponent {
    public screenHeight: any;
       
      
      constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (isPlatformBrowser(this.platformId)) {
          this.screenHeight = window.innerHeight;
          
        }
      }

      @HostListener('window:resize', ['$event'])
      onResize() {
        this.screenHeight = window.innerHeight;
        console.log(window.innerHeight)

      }

    SearchText:string = "";
    SearchSelect:string = "";

    OnProductSerach(Value:string){
        this.SearchText = Value;
    }
    OnProductSelect(Value:string){
      this.SearchSelect = Value;
  }
   
  

}
