import { Component,HostListener,Inject, Output, PLATFORM_ID, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public screenHeight: any;
       
      
      constructor( private router: Router,@Inject(PLATFORM_ID) private platformId: Object, private UserService:UserService, private location: Location,) {
        if (isPlatformBrowser(this.platformId)) {
          this.screenHeight = window.innerHeight;
          
        }
      }

      @HostListener('window:resize', ['$event'])
      onResize() {
        this.screenHeight = window.innerHeight;

      }

      UserDetails = this.UserService.getUserList()

      UserName : string = "";
      Password1 : string = "";
      Password2 : string = "";
      ErrorMessage : string = "";

      back(){
        this.location.back();
      }

      RegisterUser(){
        if(this.Password1=="" && this.UserName ==""){
          this.ErrorMessage = "UserName and Password must be filled out."
        }else if(this.Password1!="" && this.UserName ==""){
          this.ErrorMessage = "UserName must be filled out."
        }else if(this.Password1=="" || this.Password2=="" && this.UserName !=""){
          this.ErrorMessage = "Password must be filled out."
        }else if(this.Password1 != this.Password2){
          this.ErrorMessage = "Password must be similar."
        }else{
          this.UserService.createUser(this.UserName,this.Password1);
          this.router.navigate(['/']);

        }

      }



}
