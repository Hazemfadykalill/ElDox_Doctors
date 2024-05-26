import { DoctorService } from './../../../core/services/doctor.service';
import { BookService } from './../../../core/services/book.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AboutDoctorNew, Appointment, PatientBookingInDoctor } from 'src/app/core/interfaces/doctors';
import { AuthService } from 'src/app/core/services/auth.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { AdminService } from 'src/app/core/services/admin.service';
import { GenderPipe } from 'src/app/core/pipes/gender.pipe';
import { NamePatientPipe } from 'src/app/core/pipes/name-patient.pipe';

import { FormsModule } from '@angular/forms';
import { DayCustomPipe } from 'src/app/core/pipes/day-custom.pipe';
@Component({
  selector: 'app-booking-doctor',
  standalone: true,
  imports: [FormsModule,CommonModule,GenderPipe,NamePatientPipe,DayCustomPipe],
  templateUrl: './booking-doctor.component.html',
  styleUrls: ['./booking-doctor.component.scss']
})
export class BookingDoctorComponent implements OnInit {
  @ViewChild('inputGender')inputs!:ElementRef;
  allPatient?:PatientBookingInDoctor[];
  allGender?:PatientBookingInDoctor[];
  aboutDoctorDetails?:AboutDoctorNew;
  allAppointments?:Appointment[];
  namePatient:string='';
  gender:string='';
  selectedCity:any;
  cities:string[]=["Day1","Day2"]
  constructor(private doctorBooks:BookService,
    private toast:ToastrService,
    private authService:AuthService,
    private _DoctorService:AdminService
    
  ){}
  ngOnInit(): void {
    
this.gender='All'
    this.getAllBooking();
   
    this.aboutDoctor()
  }
  getAllBooking(){
    this.doctorBooks.getAllPatBookInDoctor().subscribe({
      next:data=>{
        // console.log(data)
        this.allPatient=data;
        // this.aboutDoctorDetails=data
      },
      error:err=>{
        this.toast.error("An Error occurred while getting all patient")
      }

    })
  }

  // to Get Id
aboutDoctor(){
    // this.authService.decodeToken2(localStorage.getItem("tokenDoctor"))
    console.log(this.authService.adminInformation.Id)
    this._DoctorService.aboutDoctorsById(this.authService.adminInformation.Id).subscribe({
      next:data=>{
        // console.log(data)
        this.allAppointments=data.appointments;
      },
      error:err=>{
        this.toast.error("An Error occurred while getting all appointments")
      }
    })
  }
  male(Male:string,event:any){
    if(event.target.value=='on'){

      this.getAllBooking();
    }
    this.gender=Male
    
   
    
    
 
  

   
  
 
  }
  All(all:string,event:any){
    if(event.target.value=='on'){

      this.getAllBooking();
    }
    this.gender=all
    
   
    
    
 
  

   
  
 
  }
  female(female:string,event:any){
    if(event.target.value=='on'){

      this.getAllBooking();
    }
    
    this.gender=female
    
   
  }

  // Days
  
filterDay(event:any){

  // console.log(event.target.value)
  if(event.target.value==''){
    this.getAllBooking()

  }
  else{
    this.doctorBooks.getAllPatBookInDoctorByDay(event.target.value).subscribe({
      next:data=>{
        // console.log(data)
        this.allPatient=data;
      },
      error:err=>{
        this.toast.error("An Error occurred while getting all patient")
      }
    });
    
  }
 


  
}
// get patient by name
getPatientByName(event:any){
  // console.log(event.target.value)
  // console.log(event.target.value)
    this.gender=event.target.value;
    
}
}
