import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, DOCUMENT, SET_INTERVAL_FUNC } from './app.component';
import { CardComponent } from './card/card.component';
import { AttributeDirective } from './attribute.directive';
import { CurrencyPipe } from './currency.pipe';
import { TimerService } from './timer.service';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AttributeDirective,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TimerService,
    {
      provide: DOCUMENT,
      useValue: document
    },
    {
      provide: SET_INTERVAL_FUNC,
      useValue: setInterval
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
