import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneComponent } from './phone/phone.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    NavbarComponent,
    OffersComponent,
    RecommendationsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
