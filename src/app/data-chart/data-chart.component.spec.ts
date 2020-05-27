import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DataChartComponent } from './data-chart.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

describe('DataChartComponent', () => {
  let component: DataChartComponent;
  let fixture: ComponentFixture<DataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataChartComponent],
      imports: [FormsModule, IgxCategoryChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
