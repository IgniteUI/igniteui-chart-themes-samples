import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { IgxStyleShapeEventArgs } from 'igniteui-angular-charts';
import { IgxScatterPolygonSeriesComponent } from 'igniteui-angular-charts';

@Component({
  selector: 'app-shape-chart',
  templateUrl: './shape-chart.component.html',
  styleUrls: ['./shape-chart.component.scss']
})
export class ShapeChartComponent implements AfterViewInit {

    @ViewChild('airplaneShapeSeries', {static: true})
    public airplaneShapeSeries: IgxScatterPolygonSeriesComponent;

    @ViewChild('airplaneSeatSeries', {static: true})
    public airplaneSeatSeries: IgxScatterPolygonSeriesComponent;

    @ViewChild('seatTooltip', {static: true})
    public seatTooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit() {

        fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonShape(data));

        fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
        .then((response) => response.json())
        .then((data) => this.onLoadedJsonSeats(data));
    }

    public onLoadedJsonShape(jsonData: any[]) {
        this.airplaneShapeSeries.dataSource = jsonData;
    }

    public onLoadedJsonSeats(jsonData: any[]) {
        this.airplaneSeatSeries.dataSource = jsonData;
        this.airplaneSeatSeries.showDefaultTooltip = true;
        this.airplaneSeatSeries.tooltipTemplate = this.seatTooltip;
    }

    public onStylingShape(ev: { sender: any, args: IgxStyleShapeEventArgs }) {

        ev.args.shapeOpacity = 1.0;
        ev.args.shapeStrokeThickness = 0.5;
        ev.args.shapeStroke = 'Black';

        const itemRecord = ev.args.item as any;
        if (itemRecord.class === 'First') {
            ev.args.shapeFill = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            ev.args.shapeFill = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            ev.args.shapeFill = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
            ev.args.shapeFill = 'Red';
        }

        if (itemRecord.status === 'Sold') {
            ev.args.shapeFill = 'Gray';
        }
    }
}
