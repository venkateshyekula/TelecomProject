import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { PackageAndPricingComponent } from './components/package-and-pricing/package-and-pricing.component';
import { PackageCarousalComponent } from './components/package-and-pricing/package-carousal/package-carousal.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageAndPricingComponent,
    PackageCarousalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
