import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AllDoctorAdminObject, AllDoctorsAdminList } from 'src/app/core/interfaces/admin';
import { AdminService } from 'src/app/core/services/admin.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home-doctor',
  standalone: true,
  imports: [CommonModule, NgxTypedJsModule, RouterModule],
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeDoctorComponent implements OnInit {
  allDoctors?: AllDoctorAdminObject;
  AllDoctorsList!: AllDoctorsAdminList[];

  constructor(private _adminService: AdminService, private _toast: ToastrService,private authService:AuthService) { }
  ngOnInit(): void {
    this.getAllDoctors()
  }

  getAllDoctors(page: number = 1, size: number = 12): void {
    this._adminService.getAllDoctorsAdmin(page, size).subscribe({
      next: (data) => {
        this.authService.decodeToken2(localStorage.getItem("tokenDoctor"));
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
