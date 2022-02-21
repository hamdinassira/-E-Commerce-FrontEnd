import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CommandeComponent } from './commande/commande.component';
import { CategorieComponent } from './categorie/categorie.component';
import { NewComponent } from './new/new.component';
import { ProduitComponent } from './produit/produit.component';
import { ProfileComponent } from './profile/profile.component';
import { PromoComponent } from './promo/promo.component';
import { StoresComponent } from './stores/stores.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NotifComponent } from './notif/notif.component';
import { OffersComponent } from './offers/offers.component';
import { NavComponent } from './nav/nav.component';

const routes:Routes=[
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "commande",
    component: CommandeComponent
  },
  {
    path: "categorie/:id",
    component: CategorieComponent
  },
  {
    path: "newProduct",
    component: NewComponent
  },
  {
    path: "produit/:p1/:p2",
    component: ProduitComponent
  },
  {
    path: "produit/:id",
    component: ProduitComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "promo",
    component: PromoComponent
  },
  {
    path: "stores",
    component: StoresComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
  {
    path: "notification",
    component: NotifComponent
  },
  {
    path: "offers",
    component: OffersComponent
  },
  {
    path: "nav/:id",
    component: NavComponent
  },
  { path: '', redirectTo:"produit/1/0" , pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
