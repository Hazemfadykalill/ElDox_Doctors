import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../interfaces/doctors';

@Pipe({
  name: 'customTime',
  standalone: true
})
export class CustomTimePipe implements PipeTransform {

  transform(arr:Appointment[]): Appointment[] {
    return arr.filter((item)=>item.times.length);
  }

}
