import { AfterViewInit, Component, InjectionToken, VERSION } from '@angular/core';
import { TimerService } from './timer.service';

export const DOCUMENT = new InjectionToken("__DOCUMENT__")
export const SET_INTERVAL_FUNC = new InjectionToken("__SET_INTERVAL_FUNC__")

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'mapnote';

  name = 'Angular ' + VERSION.major;
  constructor(private timerService: TimerService) {}

  public ngAfterViewInit() {
    this.timerService.start();
  }
}
