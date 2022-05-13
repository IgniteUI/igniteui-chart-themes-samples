import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule, IgxRippleModule } from 'igniteui-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataChartComponent } from './data-chart/data-chart.component';
import { CategoryChartComponent } from './category-chart/category-chart.component';
import { FinancialChartComponent } from './financial-chart/financial-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {
    IgxCategoryChartModule,
    IgxDataChartCoreModule,
    IgxBarSeriesModule,
    IgxColumnSeriesModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxPieChartModule,
    IgxFinancialChartModule,
    IgxTreemapModule,
    IgxDataChartStackedModule,
    IgxStackedFragmentSeriesModule,
    IgxDataChartCategoryModule,
    IgxSparklineModule,
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxDataChartScatterModule,
} from 'igniteui-angular-charts';
import { TreemapComponent } from './treemap/treemap.component';
import { StepChartComponent } from './step-chart/step-chart.component';
import { StackedChartComponent } from './stacked-chart/stacked-chart.component';
import { SparklineChartComponent } from './sparkline-chart/sparkline-chart.component';
import { SplineChartComponent } from './spline-chart/spline-chart.component';
import { ShapeChartComponent } from './shape-chart/shape-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataChartComponent,
    CategoryChartComponent,
    FinancialChartComponent,
    PieChartComponent,
    TreemapComponent,
    StepChartComponent,
    StackedChartComponent,
    SparklineChartComponent,
    SplineChartComponent,
    ShapeChartComponent,
    ScatterChartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HammerModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxCategoryChartModule,
    IgxDataChartCoreModule,
    IgxBarSeriesModule,
    IgxColumnSeriesModule,
    IgxLegendModule,
    IgxDataChartInteractivityModule,
    IgxPieChartModule,
    IgxFinancialChartModule,
    IgxTreemapModule,
    IgxDataChartStackedModule,
    IgxStackedFragmentSeriesModule,
    IgxDataChartCategoryModule,
    IgxSparklineModule,
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxDataChartScatterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

