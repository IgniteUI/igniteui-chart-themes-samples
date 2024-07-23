import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';
import { LinearGaugeComponent } from './linear-gauge.component';

describe('LinearGaugeComponent', () => {
  let component: LinearGaugeComponent;
  let fixture: ComponentFixture<LinearGaugeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
	  imports: [IgxLinearGaugeModule, NoopAnimationsModule, LinearGaugeComponen]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // disable animation
    component.linearGauge.transitionDuration = 0;
  });
});
