import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OffersComponent } from './offers/offers.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'offers', component: OffersComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }