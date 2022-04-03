import { AfterViewInit, Component, InjectionToken, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


  public productFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    id: new FormControl(this.generateId()),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    categories: new FormControl([])
  })

  public generateId(): string{
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var randStr = "";
    while (randStr.length < 6) {
      randStr += letters[Math.floor(Math.random() * letters.length)];
    }
    return randStr;
  }

  public setId(): void{
    this.productFormGroup.get('id').setValue(this.generateId());
  }

  public onSubmit(): void{
    if(this.productFormGroup.invalid){
      alert('Форма не валидна');
      return;
    }
    console.log(this.productFormGroup.value);
  }

  public ngAfterViewInit() {
    this.timerService.start();
  }
}
