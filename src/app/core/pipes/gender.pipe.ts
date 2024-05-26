import { Pipe, PipeTransform } from '@angular/core';
import { Appointment, PatientBookingInDoctor } from '../interfaces/doctors';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(arr:PatientBookingInDoctor[],gender:string): PatientBookingInDoctor[] {
    if(gender=='Male'){
      return arr.filter((item)=>item.gender=='Male');

    }
    else if(gender=='Female'){
      return arr.filter((item)=>item.gender=='Female');
    }
    else if(gender=="All"){
      return arr;

    }
    else{
      return arr.filter(item=>item.patientName.includes(gender));
    }
    
  }

}
