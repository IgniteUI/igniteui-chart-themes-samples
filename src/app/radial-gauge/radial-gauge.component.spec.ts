import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { RadialGaugeComponent } from './radial-gauge.component';

describe('RadialGaugeComponent', () => {
  let component: RadialGaugeComponent;
  let fixture: ComponentFixture<RadialGaugeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
	  imports: [IgxRadialGaugeModule, NoopAnimationsModule, RadialGaugeComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // disable animation
    component.radialGauge.transitionDuration = 0;
  });
});
