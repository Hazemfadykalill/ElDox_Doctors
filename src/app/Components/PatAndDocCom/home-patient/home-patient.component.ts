import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AllDoctorAdminObject, AllDoctorsAdminList } from 'src/app/core/interfaces/admin';
import { AdminService } from 'src/app/core/services/admin.service';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-home-patient',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule, RouterModule],
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePatientComponent implements OnInit {
  allDoctors?: AllDoctorAdminObject;
  AllDoctorsList!: AllDoctorsAdminList[];
  
  constructor(private _adminService: AdminService, private _toast: ToastrService) { }
  ngOnInit(): void {
    this.getAllDoctors()
  }

  getAllDoctors(page: number = 1, size: number = 12): void {
    this._adminService.getAllDoctorsAdmin(page, size).subscribe({
      next: (data) => {
        // console.log(data);
        // this.allDoctors = data;
        // this.AllDoctorsList = data;
        // console.log(data);
        // console.log(data.headers.get('CurrentPage'));
        // console.log(data.body);
        // console.log(data.headers);
        // console.log(JSON.stringify(data.headers.get("pagination"),null,4));
        this.AllDoctorsList = data.body.data;
      },
      error: (error) => {
        this._toast.error('Can not delete this doctor, doctor has bookings');
      },
    });
  }



}
