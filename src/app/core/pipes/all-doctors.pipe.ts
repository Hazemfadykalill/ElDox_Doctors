import { Pipe, PipeTransform } from '@angular/core';
import { AllDoctorsAdminList } from '../interfaces/admin';

@Pipe({
  name: 'allDoctors',
  standalone: true
})
export class AllDoctorsPipe implements PipeTransform {

  transform(arr:AllDoctorsAdminList[],searchText:string): AllDoctorsAdminList[] {
    return arr.filter(item=>(item.fullName).includes(searchText));
  }

}
