import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  name:string;

  @Input()
  number:string;
  
  @Input()
  amount:string;
  
  @Input()
  expirationDate:string;
  
  @Input()
  paymentSystem:string;

  constructor() {}
}
