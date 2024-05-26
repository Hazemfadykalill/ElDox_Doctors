import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsService } from 'src/app/core/services/patients.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DoctorDetailsToBookPatients, Pagination } from 'src/app/core/interfaces/patients';
import { Specialize } from 'src/app/core/interfaces/admin';
import { AdminService } from 'src/app/core/services/admin.service';
import { ButtonLayoutDisplay, ButtonMaker, DialogInitializer, DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { AboutPatientsComponent } from '../../about-patients/about-patients.component';
import { PatientAboutDoctorComponent } from '../patient-about-doctor/patient-about-doctor.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-patient-all-doctors',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  templateUrl: './patient-all-doctors.component.html',
  styleUrls: ['./patient-all-doctors.component.scss']
})
export class PatientAllDoctorsComponent implements OnInit {
  doctorsDetails?: DoctorDetailsToBookPatients[];
  pagesObject?: Pagination;
  
  listSpecialize?: Specialize[];
  constructor(private toast: ToastrService, private _PatientsService: PatientsService, private _adminService: AdminService,private route:Router) { }
  ngOnInit(): void {


    this.allDoctors();
    this.allSpe();
  }
  // All Doctors
  allDoctors(PageNumber:any=1) {
    this._PatientsService.getAllDoctorsForBook(PageNumber).subscribe({
      next: (res) => {
        // console.log(res.body);
        // console.log(res.body.data)
        this.doctorsDetails = res.body.data;
        this.pagesObject = res.body.pagination;
      },
      error: (err: HttpErrorResponse) => {
        this.toast.error("An error occurred while loading this page")

      }
    })

  }
  allDoctorsById(id: any) {
    if (id.target.value) {
      this._PatientsService.getAllDoctorsForBookById(id.target.value).subscribe({

        next: (res) => {

          // console.log(res.body);
          this.doctorsDetails = res.body.data;
          this.pagesObject = res.body.pagination;



        },
        error: (err: HttpErrorResponse) => {
          this.toast.error("Not Found This Doctor By This Department")
        }
      });

    }
    else {
      this.allDoctors();
    }

  }
  allDoctorsByName(name: any) {
    if (name.target.value) {
      this._PatientsService.getAllDoctorsForBookByName(name.target.value).subscribe({
        next: (res) => {

          // console.log(res.body);
          this.doctorsDetails = res.body.data;
          this.pagesObject = res.body.pagination;



        },
        error: (err: HttpErrorResponse) => {
          // console.log(err);
          this.toast.error("Not Found This Doctor By This Name")
        }
      });

    }
    else {
      this.allDoctors();
    }



  }
  // all spl
  allSpe() {
    this._adminService.getAllSpecializations().subscribe({
      next: (data) => {
        // console.log(data)
        this.listSpecialize = data;


      }
    })

  }
  // AboutDoctor
  aboutDoctor(id: any) {
    const dialogPopup = new DialogInitializer(PatientAboutDoctorComponent);
    // Any data can be sent to AnyAngularComponent.
    dialogPopup.setCustomData({ id: id }); // optional

    // Set some configuration.
    dialogPopup.setConfig({
      width: 'auto',
      height: '100%',

      layoutType: DialogLayoutDisplay.INFO // SUCCESS | INFO | NONE | DANGER | WARNING

    });

    // Set some custom buttons as list.
    // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
    dialogPopup.setButtons([
      //  new ButtonMaker('Edit', 'edit', ButtonLayoutDisplay.DARK), 

      new ButtonMaker('Ok', 'cancel', ButtonLayoutDisplay.INFO)
    ]);

    // Simply open the popup and observe which button is clicked and, 
    // receive optional payload from AnyAngularComponent.
    dialogPopup.openDialog$().subscribe(resp => {
      console.log('dialog response: ', resp);
    });

  }

  pageChanged(event: any) {
    this._PatientsService.getAllDoctorsForBookByPage(event).subscribe({
      next: (res) => {
        
        this.doctorsDetails = res.body.data;
        this.pagesObject = res.body.pagination;
      },
      error: (err: HttpErrorResponse) => {
        this.toast.error("An Error Ocurred")
      }
    })

  }

}


