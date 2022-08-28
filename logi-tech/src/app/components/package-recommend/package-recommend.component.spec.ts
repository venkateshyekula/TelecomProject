import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageRecommendComponent } from './package-recommend.component';

describe('PackageRecommendComponent', () => {
  let component: PackageRecommendComponent;
  let fixture: ComponentFixture<PackageRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageRecommendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
