import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDay',
  standalone: true
})
export class CustomDayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
