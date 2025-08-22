import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Directive,HostListener,Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
    imports: [HeaderComponent]
})
export class PageNotFoundComponent {
  public screenHeight: any;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenHeight = window.innerHeight;
      
    }
  }
  @HostListener('window:resize', ['$event'])
      onResize() {
        this.screenHeight = window.innerHeight;

      }

}
