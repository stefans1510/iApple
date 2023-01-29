import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormComponent } from './form/form.component';
import { Phone } from './model/phone';
import { MobileService } from './services/mobileService';
import { DIComponent } from './di/di.component';
import { PhoneListingComponent } from './phone-listing/phone-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    NavbarComponent,
    OffersComponent,
    RecommendationsComponent,
    AboutUsComponent,
    FormComponent,
    DIComponent,
    PhoneListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
