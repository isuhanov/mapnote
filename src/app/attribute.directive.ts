import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnChanges {
  
  @Input()
  value:object;

  constructor(private el: ElementRef<HTMLElement>) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.changeAttr();
  }
  
  changeAttr = (): void => {
    for (const attr in this.value) {
      this.el.nativeElement.setAttribute(attr, this.value[attr]);
    }
  }
}
