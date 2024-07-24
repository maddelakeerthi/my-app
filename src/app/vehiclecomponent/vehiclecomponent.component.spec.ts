import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclecomponentComponent } from './vehiclecomponent.component';

describe('VehiclecomponentComponent', () => {
  let component: VehiclecomponentComponent;
  let fixture: ComponentFixture<VehiclecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
