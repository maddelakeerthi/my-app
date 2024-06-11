import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TharunComponent } from './tharun.component';

describe('TharunComponent', () => {
  let component: TharunComponent;
  let fixture: ComponentFixture<TharunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TharunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TharunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
