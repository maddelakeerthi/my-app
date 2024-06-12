import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartShoppingComponent } from './smart-shopping.component';

describe('SmartShoppingComponent', () => {
  let component: SmartShoppingComponent;
  let fixture: ComponentFixture<SmartShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartShoppingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
