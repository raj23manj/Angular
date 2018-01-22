import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  // see angular IO for interface implemantion
  transform(value: string, limit?: number){
    if(!value)
      return null;

    let actualLimit = (limit) ? limit : 50;
    return value.substring(0, limit) + '...';
  }
}
