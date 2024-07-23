import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule, HammerModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  IgxNavigationDrawerModule,
  IgxNavbarModule,
  IgxLayoutModule,
  IgxRippleModule,
} from "igniteui-angular";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { DataChartComponent } from "./data-chart/data-chart.component";
import { CategoryChartComponent } from "./category-chart/category-chart.component";
import { FinancialChartComponent } from "./financial-chart/financial-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import {
  IgxCategoryChartModule,
  IgxDataChartCoreModule,
  IgxDataChartPolarModule,
  IgxDataChartPolarCoreModule,
  IgxBarSeriesModule,
  IgxColumnSeriesModule,
  IgxLegendModule,
  IgxDataChartInteractivityModule,
  IgxPieChartModule,
  IgxFinancialChartModule,
  IgxDataChartRadialModule,
  IgxDoughnutChartModule,
  IgxItemLegendModule,
  IgxRingSeriesModule,
  IgxDataChartShapeModule,
  IgxDataChartShapeCoreModule,
  IgxDataChartScatterModule,
  IgxSparklineModule,
} from "igniteui-angular-charts";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PointChartComponent } from "./point-chart/point-chart.component";
import { PolarChartComponent } from "./polar-chart/polar-chart.component";
import { RadialChartComponent } from "./radial-chart/radial-chart.component";
import { RadialGaugeComponent } from "./radial-gauge/radial-gauge.component";
import { LinearGaugeComponent } from "./linear-gauge/linear-gauge.component";
import { BulletGraphComponent } from "./bullet-graph/bullet-graph.component";
import { DonutChartComponent } from "./donut-chart/donut-chart.component";
import {
  IgxBulletGraphModule,
  IgxLinearGaugeModule,
  IgxRadialGaugeModule,
} from "igniteui-angular-gauges";
import { CommonModule } from "@angular/common";
import { SparklineChartComponent } from "./sparkline-chart/sparkline-chart.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataChartComponent,
    CategoryChartComponent,
    FinancialChartComponent,
    PieChartComponent,
    LineChartComponent,
    PointChartComponent,
    PolarChartComponent,
    RadialChartComponent,
    RadialGaugeComponent,
    LinearGaugeComponent,
    BulletGraphComponent,
    DonutChartComponent,
    SparklineChartComponent,
  ],
  imports: [
    CommonModule,
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
    IgxDataChartPolarModule,
    IgxDataChartRadialModule,
    IgxDataChartPolarCoreModule,
    IgxPieChartModule,
    IgxFinancialChartModule,
    IgxBulletGraphModule,
    IgxRadialGaugeModule,
    IgxLinearGaugeModule,
    IgxDoughnutChartModule,
    IgxItemLegendModule,
    IgxRingSeriesModule,
    IgxDataChartShapeModule,
    IgxDataChartShapeCoreModule,
    IgxDataChartScatterModule,
    IgxSparklineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
