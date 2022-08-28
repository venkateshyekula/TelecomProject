import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackageAndPricingComponent } from './components/package-and-pricing/package-and-pricing.component';

const routes: Routes = [
  { path: '', redirectTo: 'PackageAndPricing', pathMatch: 'full' },
  { path: 'PackageAndPricing', component: PackageAndPricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
