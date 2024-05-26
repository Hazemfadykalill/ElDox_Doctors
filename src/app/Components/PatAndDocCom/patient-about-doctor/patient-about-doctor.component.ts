import { BookService } from './../../../core/services/book.service';
import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { CommonModule, DatePipe, Time } from '@angular/common';
import { Subscription, timestamp } from 'rxjs';
import { AboutDoctor } from 'src/app/core/interfaces/admin';
import { AdminService } from 'src/app/core/services/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AboutDoctorNew, TimeBook } from 'src/app/core/interfaces/doctors';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { MapTimePipe } from 'src/app/core/pipes/map-time.pipe';
import { CouponsService } from 'src/app/core/services/coupons.service';
import { CouponsObject } from 'src/app/core/interfaces/coupons';

@Component({
  selector: 'app-patient-about-doctor',
  standalone: true,
  imports: [CommonModule,MapTimePipe, FormsModule, ListboxModule,DropdownModule],
  templateUrl: './patient-about-doctor.component.html',
  styleUrls: ['./patient-about-doctor.component.scss']
})
export class PatientAboutDoctorComponent {
  @ViewChild("opt") options!:ElementRef;
  doctorId: any;
  couponsList?:CouponsObject[];
  times!: any;
  selectedCity: any;
  customId:any;
  formattedTime?: string;
  customTime:any;
  timeId:any;
  code:any;
  realTime:any;
  aboutDoctor?: AboutDoctorNew;
  timeList?:TimeBook[];
  private subscriptions: Subscription = new Subscription();

  // Dependency Injection of the dialogBelonging in constructor is crucial.
  // constructor(@Inject('dialogBelonging') public dialogBelonging: DialogBelonging,private _AdminService:AdminService) {}
  constructor(private _BookService:BookService,private _CouponsService:CouponsService,private _Renderer2:Renderer2,private _AdminService: AdminService, private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Check received data and other available features.
    // console.log(this.dialogBelonging);
    // console.log(this.dialogBelonging.customData.id);
    // logic about doctor to patients book
    //  function to get id from path
    this.getIdFromPath();
    this.getAllCoupons();


  }
  // Doctor details
  doctorDetails(id: any) {
    this._AdminService.aboutDoctorsById(id).subscribe({
      next: (res: any) => {
        this.aboutDoctor = res;
        // console.log(res)







      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }
  // to get id from path
  getIdFromPath() {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params: any) => {
        this.doctorId = params.get('id');
        // console.log(this.doctorId);
        this.doctorDetails(this.doctorId);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  changeId(event:any){
    // console.log((event.target.value.split(",")));
    this.timeId = parseInt((event.target.value.split(","))[0]);
    // realTime
    this.realTime = event.target.value.split(",")[1]

    
    
  }
  changeCode(event:any){
    // console.log((event.target.value));
    this.code = event.target.value;
    
  }
  getAllCoupons(){
    this._CouponsService.getAllCoupons().subscribe({
      next:data=>{
        this.couponsList=data.filter((item:any)=>item.active=='True');
        console.log(data);
        // console.log(data);
        
      
      
      
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
        }
  
    })
  
  }
  bookNow(){
    console.log(this.timeId);
    console.log(this.code);
    console.log(this.realTime);
    // realTime
    
  //   this._BookService.patientBook(this.timeId,this.code,isoDateTime).subscribe({
  //     next:data=>{
  //       console.log(data);
  //     },
  //     error:(err:HttpErrorResponse)=>{
  //       console.log(err);
  //     }
  //   })

  //  }


  
}}
