import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CategoryChartComponent } from './category-chart.component';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';

describe('CategoryChartComponent', () => {
  let component: CategoryChartComponent;
  let fixture: ComponentFixture<CategoryChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryChartComponent],
      imports: [FormsModule, IgxCategoryChartModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
