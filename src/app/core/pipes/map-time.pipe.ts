import { Pipe, PipeTransform } from '@angular/core';
import { Appointment, TimeBook } from '../interfaces/doctors';

@Pipe({
  name: 'mapTime',
  standalone: true
})
export class MapTimePipe implements PipeTransform {

  transform(arr: Appointment[], day: string): string[] {
    return ((arr.filter(items=>items.day.includes(day))).flatMap((time)=>time.times)).map((x)=>x.time)
  }

}
// return arr.filter(items=>items.day.includes(day)).map((time)=>time.times.join(', '));
// (arr.filter(items=>items.day.includes(day))).flatMap((time)=>time.times)