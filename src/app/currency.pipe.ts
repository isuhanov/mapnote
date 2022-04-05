import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(num: number, region:string): string {
    return num.toLocaleString(region);
  }
}
