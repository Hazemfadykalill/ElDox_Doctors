import { Pipe, PipeTransform } from '@angular/core';
import { PatientBookingInDoctor } from '../interfaces/doctors';

@Pipe({
  name: 'namePatient',
  standalone: true
})
export class NamePatientPipe implements PipeTransform {

  transform(arr:PatientBookingInDoctor[],name:string): PatientBookingInDoctor[] {
    return arr.filter(item=>item.patientName.includes(name));
  }

}
