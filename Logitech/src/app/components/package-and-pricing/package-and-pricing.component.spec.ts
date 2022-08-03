import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageAndPricingComponent } from './package-and-pricing.component';

describe('PackageAndPricingComponent', () => {
  let component: PackageAndPricingComponent;
  let fixture: ComponentFixture<PackageAndPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageAndPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageAndPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
