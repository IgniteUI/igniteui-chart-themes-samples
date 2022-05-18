import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointChartComponent } from './point-chart.component';

describe('PointChartComponent', () => {
  let component: PointChartComponent;
  let fixture: ComponentFixture<PointChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
