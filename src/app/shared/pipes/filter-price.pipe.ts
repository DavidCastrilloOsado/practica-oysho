import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Products } from '../../core/models/global-products.models';

export type SortOrder = 'asc' | 'desc';

@Injectable()
@Pipe({
  name: 'sort',
})
export class FilterPricePipe implements PipeTransform {
  transform(
    value: Products[],
    sortOrder: SortOrder | string,
    sortKey: keyof Products
  ): Products[] {
    sortOrder = sortOrder && (sortOrder.toLowerCase() as string);
    if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;
    let numberArray = [];
    let stringArray = [];
      numberArray = value
        .filter((item) => typeof item[sortKey] === 'number')
        .sort((a, b) => Number(a[sortKey]) - Number(b[sortKey]));
      stringArray = value
        .filter((item) => typeof item[sortKey] === 'string')
        .sort((a, b) => {
          if (!a[sortKey] < !b[sortKey]) return -1;
          else if (!a[sortKey] > !b[sortKey]) return 1;
          else return 0;
        });
    const sorted = numberArray.concat(stringArray);
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }
}
