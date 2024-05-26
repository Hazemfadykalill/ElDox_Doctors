import { PatientsService } from './../../core/services/patients.service';
import { HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  AppearanceAnimation,
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
} from '@costlydeveloper/ngx-awesome-popup';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import {
  AllDoctorAdminObject,
  AllDoctorsAdminList,
  Specialize,
} from 'src/app/core/interfaces/admin';
import { AllDoctorsPipe } from 'src/app/core/pipes/all-doctors.pipe';
import { AdminService } from 'src/app/core/services/admin.service';
import { AboutDoctorNew } from 'src/app/core/interfaces/doctors';
import { Pagination } from 'src/app/core/interfaces/patients';

@Component({
  selector: 'app-all-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule, AllDoctorsPipe, RouterModule,NgxPaginationModule],
  templateUrl: './all-doctors.component.html',
  styleUrls: ['./all-doctors.component.scss'],
})
export class AllDoctorsComponent implements OnInit {
  text!: string;
  constructor(
    private _adminService: AdminService,private _PatientsService:PatientsService,
    private _toast: ToastrService,private router:Router
  ) {}
  allDoctors?: Pagination;
  AllDoctorsList!: AboutDoctorNew[];
  listSpecialize?:Specialize[];
  ngOnInit(): void {
    this.getAllDoctors();
    this.allSpecialize();
  }
  // Admin All Doctors
  getAllDoctors(): void {
    this._PatientsService.getAllDoctorsForBook().subscribe({
      next: (res) => {
        // console.log(res.body.data);
        // console.log(res.body.pagination);
        this.AllDoctorsList = res.body.data;
        this.allDoctors=res.body.pagination;
      },
      error: (err: HttpErrorResponse) => {
        this._toast.error("An error occurred")
      }
    })
  
  }
  deleteDoctor(id: number) {
    this._adminService.deleteDoctorById(id).subscribe({
      next: (data) => {
        this.getAllDoctors();
        this._toast.success('Doctor Deleted Successfully');
      },
      error: (err) => {
      
        this._toast.error('this Doctors Booking,You Don’t Delete! ');

      },
    });
  }

  changeAllDoctorsBySpl(event: any) {
    if(event.target.value){
      this._PatientsService.getAllDoctorsForBookById(event.target.value).subscribe({
        next: (res) => {
          // console.log(res);
          this.AllDoctorsList = res.body.data;
          this.allDoctors=res.body.pagination;
        },
        error: (err: HttpErrorResponse) => {
this._toast.error("An error occurred")        }
      });
      

    }
    else{
      this.getAllDoctors();
    }
  
  }
  changeAllDoctorsByNameDoctor(event: any) {
    if(event.target.value){
      this._PatientsService.getAllDoctorsForBookByName(event.target.value).subscribe({
        next: (res) => {
          // console.log(res);
          this.AllDoctorsList = res.body.data;
        },
        error: (err: HttpErrorResponse) => {
          this._toast.error("An error occurred")
        }
      })

    }
    else{
      this.getAllDoctors();
    }
  
  }
edit(id:any){
  const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('😎Attention');
    newConfirmBox.setMessage(
      'Are you sure you Edit doctor!'
    );

    // Choose layout color type
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_ONE, // SUCCESS | INFO | NONE | DANGER | WARNING
      animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
      animationOut: DisappearanceAnimation.SLIDE_OUT_UP, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
      allowHtmlMessage: true,
      buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('OK', 'Cancel');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.clickedButtonID == 'ok') {
        this.router.navigate(['/doctors/editDoctors',id])
       
      } else {
      }
    });

}
  confirmDa(id: number) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('😎Attention');
    newConfirmBox.setMessage(
      'Are you sure you delete that doctor!?Please Check Again!'
    );

    // Choose layout color type
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.CUSTOM_ONE, // SUCCESS | INFO | NONE | DANGER | WARNING
      animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
      animationOut: DisappearanceAnimation.SLIDE_OUT_UP, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
      allowHtmlMessage: true,
      buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('OK', 'Cancel');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.clickedButtonID == 'ok') {
        this.deleteDoctor(id);
        // console.log('Deleted');
      } else {
      }
    });
  }

  pageChanged(event:any){
    // console.log(event);
  
    this._PatientsService.getAllDoctorsForBookByPage(event).subscribe({
      next:(res)=>{
       
        this.AllDoctorsList = res.body.data;
        this.allDoctors = res.body.pagination
      },
      error:(err:HttpErrorResponse)=>{
        this._toast.error("An error occurred")
      }
    })

  }
  allSpecialize(){
    this._adminService.getAllSpecializations().subscribe({
      next:(data)=>{
        this.listSpecialize = data;
        

      }
      ,
      error:(err:HttpErrorResponse)=>{
this._toast.error("An error occurred")      }
    })

  }
}
