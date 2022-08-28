import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSelectionComponent } from './package-selection.component';

describe('PackageSelectionComponent', () => {
  let component: PackageSelectionComponent;
  let fixture: ComponentFixture<PackageSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
