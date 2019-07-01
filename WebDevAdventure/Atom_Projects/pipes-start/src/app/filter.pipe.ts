import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // pure is true by default. Changing this to false will cause angular
              // to update whenever data (anything) changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string,  propName: string): any {
    if (value.length === 0 || filterString === '') {
        return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

  // NOTE: Line 14 ~ item is an element of an array. We access propName (a string) of an element by using [].

}
