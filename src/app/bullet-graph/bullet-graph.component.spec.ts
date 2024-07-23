import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxBulletGraphModule } from 'igniteui-angular-gauges';
import { BulletGraphComponent } from './bullet-graph.component';

describe('BulletGraphComponent', () => {
  let component: BulletGraphComponent;
  let fixture: ComponentFixture<BulletGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IgxBulletGraphModule, NoopAnimationsModule, BulletGraphComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // disable animation
    component.bulletGraph.transitionDuration = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
