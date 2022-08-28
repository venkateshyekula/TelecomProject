import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { TooltipModule } from 'primeng/tooltip';
import { PackageAndPricingComponent } from './components/package-and-pricing/package-and-pricing.component';
import { PackageCarousalComponent } from './components/package-and-pricing/package-carousal/package-carousal.component';
import { PackageRecommendComponent } from './components/package-recommend/package-recommend.component';
import { PackageSelectionComponent } from './components/package-selection/package-selection.component';


@NgModule({
  declarations: [
    AppComponent,
    PackageAndPricingComponent,
    PackageCarousalComponent,
    PackageRecommendComponent,
    PackageSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    TooltipModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
