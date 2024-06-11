import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeerthiComponent } from './keerthi.component';

describe('KeerthiComponent', () => {
  let component: KeerthiComponent;
  let fixture: ComponentFixture<KeerthiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeerthiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeerthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
