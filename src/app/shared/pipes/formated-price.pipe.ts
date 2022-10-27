import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatedPrice'
})
export class FormatedPricePipe implements PipeTransform {

  transform(value: number): string {

    return (value / 100).toString().replace('.', ',');
  }

}
