import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcResultItemComponent } from './calc-result-item.component';

describe('CalcResultItemComponent', () => {
  let component: CalcResultItemComponent;
  let fixture: ComponentFixture<CalcResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcResultItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
