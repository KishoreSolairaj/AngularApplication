import { Component,HostListener,Inject, Output, PLATFORM_ID, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';
import {UserService} from '../../services/user.service'


@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    imports: [FormsModule, HeaderComponent,RouterLink, RouterLinkActive, RouterOutlet],

})
export class LoginPageComponent   {


      public screenHeight: any;
       
      
      constructor( private router: Router,@Inject(PLATFORM_ID) private platformId: Object, private UserService:UserService) {
        if (isPlatformBrowser(this.platformId)) {
          this.screenHeight = window.innerHeight;
          
        }
      }

      @HostListener('window:resize', ['$event'])
      onResize() {
        this.screenHeight = window.innerHeight;

      }

      UserDetails = this.UserService.getUserList()

      UserName : String = "";
      Password : String = "";
      ErrorMessage : String = "";
      @Output()
      ValidUser:EventEmitter<Boolean> = new EventEmitter<Boolean>();


      CheckUser(){
        if(this.Password=="" && this.UserName ==""){
          this.ErrorMessage = "UserName and Password must be filled out."
        }else if(this.Password!="" && this.UserName ==""){
          this.ErrorMessage = "UserName must be filled out."
        }else if(this.Password=="" && this.UserName !=""){
          this.ErrorMessage = "Password must be filled out."
        }else{
          const isUserValid = this.UserDetails.some(user => user.name === this.UserName && user.password === this.Password);

          if (isUserValid) {
            this.ErrorMessage = "User is valid";
            // this.ValidUser.emit(false)
            this.router.navigate(['/productlist']);
          } else {
            this.ErrorMessage = "Invalid user credentials*.";
          }

        }

        

      }

      RegisterPage(){
        this.router.navigate(['/registerUser']);
      }

}
