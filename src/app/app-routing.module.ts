import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

import { PageNotFoundComponent } from "./error-routing/not-found/not-found.component";
import { UncaughtErrorComponent } from "./error-routing/error/uncaught-error.component";
import { ErrorRoutingModule } from "./error-routing/error-routing.module";
import { DataChartComponent } from "./data-chart/data-chart.component";
import { CategoryChartComponent } from "./category-chart/category-chart.component";
import { FinancialChartComponent } from "./financial-chart/financial-chart.component";
import { PieChartComponent } from "./pie-chart/pie-chart.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { PointChartComponent } from "./point-chart/point-chart.component";
import { PolarChartComponent } from "./polar-chart/polar-chart.component";
import { RadialChartComponent } from "./radial-chart/radial-chart.component";
import { RadialGaugeComponent } from "./radial-gauge/radial-gauge.component";
import { LinearGaugeComponent } from "./linear-gauge/linear-gauge.component";
import { BulletGraphComponent } from "./bullet-graph/bullet-graph.component";
import { DonutChartComponent } from "./donut-chart/donut-chart.component";
import { SparklineChartComponent } from "./sparkline-chart/sparkline-chart.component";
//import { ShapeChartComponent } from './shape-chart/shape-chart.component';

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent, data: { text: "Home" } },
  { path: "error", component: UncaughtErrorComponent },
  {
    path: "data-chart",
    component: DataChartComponent,
    data: { text: "Data Chart" },
  },
  {
    path: "category-chart",
    component: CategoryChartComponent,
    data: { text: "Category Chart" },
  },
  {
    path: "financial-chart",
    component: FinancialChartComponent,
    data: { text: "Financial Chart" },
  },
  {
    path: "pie-chart",
    component: PieChartComponent,
    data: { text: "Pie Chart" },
  },
  {
    path: "line-chart",
    component: LineChartComponent,
    data: { text: "Line Chart" },
  },
  {
    path: "point-chart",
    component: PointChartComponent,
    data: { text: "Point Chart" },
  },
  {
    path: "polar-chart",
    component: PolarChartComponent,
    data: { text: "Polar Chart" },
  },
  {
    path: "donut-chart",
    component: DonutChartComponent,
    data: { text: "Donut Chart" },
  },
  //{ path: 'shape-chart', component: ShapeChartComponent, data: { text: 'Shape Chart' } },
  {
    path: "sparkline-chart",
    component: SparklineChartComponent,
    data: { text: "Sparkline Chart" },
  },
  {
    path: "radial-chart",
    component: RadialChartComponent,
    data: { text: "Radial Chart" },
  },
  {
    path: "radial-gauge",
    component: RadialGaugeComponent,
    data: { text: "Radial Gauge" },
  },
  {
    path: "linear-gauge",
    component: LinearGaugeComponent,
    data: { text: "Linear Gauge" },
  },
  {
    path: "bullet-graph",
    component: BulletGraphComponent,
    data: { text: "Bullet Graph" },
  },
  { path: "**", component: PageNotFoundComponent }, // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule],
})
export class AppRoutingModule {}
