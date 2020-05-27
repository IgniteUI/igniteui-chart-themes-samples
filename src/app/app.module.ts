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
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {
  IgxCategoryChartModule,
  IgxDataChartCoreModule,
  IgxBarSeriesModule,
  IgxColumnSeriesModule,
  IgxLegendModule,
  IgxDataChartInteractivityModule,
  IgxPieChartModule,
} from 'igniteui-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataChartComponent,
    CategoryChartComponent,
    PieChartComponent
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
    IgxPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

