import { Inject, Injectable } from '@angular/core';
import { DOCUMENT, SET_INTERVAL_FUNC } from './app.component';

@Injectable()
export class TimerService {
  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(SET_INTERVAL_FUNC) private setInterval: Function){ }

  public start() {
    const timerOutputElement = this.document.querySelector('#timer-output');
    let counter: number = 0;
    this.setInterval(() => {
      timerOutputElement.innerHTML = `${counter++}`;
    }, 1000);
  }
}
