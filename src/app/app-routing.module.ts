import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { DataChartComponent } from './data-chart/data-chart.component';
import { CategoryChartComponent } from './category-chart/category-chart.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TreemapComponent } from './treemap/treemap.component';
import { StepChartComponent } from './step-chart/step-chart.component';
import { StackedChartComponent } from './stacked-chart/stacked-chart.component';
import { SparklineChartComponent } from './sparkline-chart/sparkline-chart.component';
import { SplineChartComponent } from './spline-chart/spline-chart.component';
import {ShapeChartComponent} from './shape-chart/shape-chart.component';
import {ScatterChartComponent} from './scatter-chart/scatter-chart.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'data-chart', component: DataChartComponent, data: { text: 'Data Chart' } },
  { path: 'category-chart', component: CategoryChartComponent, data: { text: 'Category Chart' } },
  { path: 'financial-chart', component: FinancialChartComponent, data: { text: 'Financial Chart' } },
  { path: 'pie-chart', component: PieChartComponent, data: { text: 'Pie Chart' } },
  { path: 'treemap', component: TreemapComponent, data: { text: 'Treemap' } },
  { path: 'step-chart', component: StepChartComponent, data: { text: 'Step Chart' } },
  { path: 'stacked-chart', component: StackedChartComponent, data: { text: 'Stacked chart' } },
  { path: 'sparkline-chart', component: SparklineChartComponent, data: { text: 'Sparkline chart' } },
  { path: 'spline-chart', component: SplineChartComponent, data: { text: 'Spline chart' } },
  { path: 'shape-chart', component: ShapeChartComponent, data: { text: 'Shape chart' } },
  { path: 'scatter-chart', component: ScatterChartComponent, data: { text: 'Scatter chart' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }
