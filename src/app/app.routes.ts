import { Routes } from '@angular/router';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {path:'', component: LoginPageComponent},
    { path: 'productdescription/:id', component: ProductDescriptionComponent },
    { path: 'productlist', component: ProductsComponent },
  { path: 'registerUser', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
   { path: '**', component: PageNotFoundComponent }, 
];
