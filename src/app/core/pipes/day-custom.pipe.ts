import { Pipe, PipeTransform } from '@angular/core';
import { Appointment } from '../interfaces/doctors';

@Pipe({
  name: 'dayCustom',
  standalone: true
})
export class DayCustomPipe implements PipeTransform {

  transform(day:any): any {

    // Parse the input date string into a Date object
    // Note: Months are zero-indexed in JavaScript Date (0 = January, 11 = December)
    const parts = day.split(/[/ :]/);
  const inputDate = new Date(parts[2], parts[1] - 1, parts[0], parts[3], parts[4], parts[5]);

  // Array of day names
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Get the day of the week as a number (0 = Sunday, 6 = Saturday)
  const dayOfWeekNumber = inputDate.getDay();

  // Get the name of the day
  const dayOfWeek = daysOfWeek[dayOfWeekNumber];

  return dayOfWeek;

    
  }

}

// arr1
//         .filter(item => !arr2.includes(item))
//         .concat(arr2.filter(item => !arr1.includes(item)));
