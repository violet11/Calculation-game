import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationsResultsComponent } from './calculations-results.component';

describe('CalculationsResultsComponent', () => {
  let component: CalculationsResultsComponent;
  let fixture: ComponentFixture<CalculationsResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationsResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
