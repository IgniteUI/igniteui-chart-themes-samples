import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent {
  public data = [
      { MarketShare: 30, Company: 'Google' },
      { MarketShare: 30, Company: 'Apple' },
      { MarketShare: 15, Company: 'Microsoft' },
      { MarketShare: 15, Company: 'Samsung' },
      { MarketShare: 10, Company: 'Other' },
  ];
}

