import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageCarousalComponent } from './package-carousal.component';

describe('PackageCarousalComponent', () => {
  let component: PackageCarousalComponent;
  let fixture: ComponentFixture<PackageCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageCarousalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
