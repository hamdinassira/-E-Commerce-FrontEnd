import { CUSTOM_ELEMENTS_SCHEMA, NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { CommandeComponent } from './commande/commande.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CartComponent } from './cart/cart.component';
import { NewComponent } from './new/new.component';
import { PromoComponent } from './promo/promo.component';
import { ProfileComponent } from './profile/profile.component';
import { StoresComponent } from './stores/stores.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OffersComponent } from './offers/offers.component';
import { NotifComponent } from './notif/notif.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitComponent,
    CommandeComponent,
    CategorieComponent,
    CartComponent,
    NewComponent,
    PromoComponent,
    ProfileComponent,
    StoresComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    OffersComponent,
    NotifComponent,
    NavComponent,
    FooterComponent,
    ProduitDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
