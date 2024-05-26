import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsService } from 'src/app/core/services/appointments.service';
import { PatientsService } from 'src/app/core/services/patients.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DoctorDetailsToBookPatients } from 'src/app/core/interfaces/patients';
import { AdminService } from 'src/app/core/services/admin.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Appointment } from 'src/app/core/interfaces/doctors';
import { AppearanceAnimation, ConfirmBoxInitializer, DialogLayoutDisplay, DisappearanceAnimation, ToastNotificationInitializer, ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from '@costlydeveloper/ngx-awesome-popup';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { CustomTimePipe } from 'src/app/core/pipes/custom-time.pipe';
import { ToastrService } from 'ngx-toastr';
import { DayCustomPipe } from 'src/app/core/pipes/day-custom.pipe';


@Component({
  selector: 'app-appointment-doctor',
  standalone: true,
  imports: [CommonModule, CalendarModule, CustomTimePipe,FormsModule, DropdownModule,DayCustomPipe],
  templateUrl: './appointment-doctor.component.html',
  styleUrls: ['./appointment-doctor.component.scss']
})
export class AppointmentDoctorComponent implements OnInit {
  @ViewChild("timeInput") timeInput!: ElementRef;
  @ViewChild("price") priceInput!: ElementRef;
  @ViewChild("day") dayInput!: ElementRef;
  appointmentList?: Appointment[];
  timeList: string[] = [];
  days?: string[];
  day: any;
  times: any
  selectedDay?: string;
  name?: string;
  timeDay: any;
  timeId: any;
  timeValue: any;
  price: any;
  flag: boolean = false;
  flagAdd: boolean = false;
  constructor(private toast:ToastrService,private admin: AdminService, private appS: AppointmentsService, private _PatientsService: PatientsService, private AuthService: AuthService) { }
  ngOnInit(): void {
    this.days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    this.getName();
    // this.allAppointments();
  }
  // add
  add() {
    if (this.price && this.day && this.timeList) {
      console.log(this.price);
      console.log(this.day);
      console.log(this.timeList);
      this.appS.addAppointments(this.price, this.day, this.timeList).subscribe({
        next: data => {
          console.log(data);
          // window.location.reload();
          this.getName();
          this.priceInput.nativeElement.value = "";
          this.timeInput.nativeElement.value = "";
          this.dayInput.nativeElement.value = "";
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })

    }
    else {
      const newToastNotification = new ToastNotificationInitializer();
      newToastNotification.setTitle(' Attention!!');
      newToastNotification.setMessage('Please Select Time & Day & Price! ');

      // Choose layout color type
      newToastNotification.setConfig({
        autoCloseDelay: 2000, // optional
        textPosition: 'left', // optional
        layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
        progressBar: ToastProgressBarEnum.INCREASE, // INCREASE | DECREASE | NONE
        toastUserViewType: ToastUserViewTypeEnum.STANDARD,  // STANDARD | SIMPLE
        animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
        animationOut: DisappearanceAnimation.FLIP_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
        // TOP_LEFT | TOP_CENTER | TOP_RIGHT | TOP_FULL_WIDTH | BOTTOM_LEFT | BOTTOM_CENTER | BOTTOM_RIGHT | BOTTOM_FULL_WIDTH
        toastPosition: ToastPositionEnum.TOP_CENTER,
        allowHtmlMessage: true,
      });

      // Simply open the popup
      newToastNotification.openToastNotification$();

    }




  }
  // delete
  delete(id: any) {
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('😎Attention');

    newConfirmBox.setMessage(
      'Are you sure you Delete Time!'
    );

    // Choose layout color type
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
      animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
      animationOut: DisappearanceAnimation.SLIDE_OUT_UP, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
      allowHtmlMessage: true,
      buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('OK', 'Cancel');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.clickedButtonID == 'ok') {
        this.appS.deleteAppointments(id).subscribe({
          next: data => {
            this.toast.success("Deleted successfully")

            
            this.getName();
          },
          error: (err:HttpErrorResponse) => {
            this.toast.error("Error deleting");
            
          }
        })

      } else {
      }
    });




  }
  // Update
  Update(id: any, time: any) {
    this.timeValue = time;
    console.log(id.toString())
    this.timeId = id.toString();
   
    this.flag = true





  }
  changeTime(event:any){
    this.timeDay = event.target.value
  }
  updateTwo() {
  
    console.log(this.timeDay)
    console.log(this.timeId)
   
    if (this.timeDay && this.timeId) {
      this.appS.editAppointments(this.timeId, this.timeDay).subscribe({
        next: data => {
         
          this.getName();
          this.flag = false;
          const newToastNotification = new ToastNotificationInitializer();
          newToastNotification.setTitle(' Attention!!');
          newToastNotification.setMessage('Update Time  Successfully! ');

          // Choose layout color type
          newToastNotification.setConfig({
            autoCloseDelay: 2000, // optional
            textPosition: 'left', // optional
            layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
            progressBar: ToastProgressBarEnum.INCREASE, // INCREASE | DECREASE | NONE
            toastUserViewType: ToastUserViewTypeEnum.STANDARD,  // STANDARD | SIMPLE
            animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
            animationOut: DisappearanceAnimation.FLIP_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
            // TOP_LEFT | TOP_CENTER | TOP_RIGHT | TOP_FULL_WIDTH | BOTTOM_LEFT | BOTTOM_CENTER | BOTTOM_RIGHT | BOTTOM_FULL_WIDTH
            toastPosition: ToastPositionEnum.TOP_CENTER,
            allowHtmlMessage: true,
          });

          // Simply open the popup
          newToastNotification.openToastNotification$();

        },
        error: err => {
          const newToastNotification = new ToastNotificationInitializer();
          newToastNotification.setTitle(' Attention!!');
          newToastNotification.setMessage('Update Time  failed! ');

          // Choose layout color type
          newToastNotification.setConfig({
            autoCloseDelay: 2000, // optional
            textPosition: 'left', // optional
            layoutType: DialogLayoutDisplay.SUCCESS, // SUCCESS | INFO | NONE | DANGER | WARNING
            progressBar: ToastProgressBarEnum.INCREASE, // INCREASE | DECREASE | NONE
            toastUserViewType: ToastUserViewTypeEnum.STANDARD,  // STANDARD | SIMPLE
            animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
            animationOut: DisappearanceAnimation.FLIP_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
            // TOP_LEFT | TOP_CENTER | TOP_RIGHT | TOP_FULL_WIDTH | BOTTOM_LEFT | BOTTOM_CENTER | BOTTOM_RIGHT | BOTTOM_FULL_WIDTH
            toastPosition: ToastPositionEnum.TOP_CENTER,
            allowHtmlMessage: true,
          });

          // Simply open the popup
          newToastNotification.openToastNotification$();

        }
      });
      this.flag=false
    }
    else {
      const newToastNotification = new ToastNotificationInitializer();
      newToastNotification.setTitle(' Attention!!');
      newToastNotification.setMessage('Please Select Time! ');

      // Choose layout color type
      newToastNotification.setConfig({
        autoCloseDelay: 2000, // optional
        textPosition: 'left', // optional
        layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
        progressBar: ToastProgressBarEnum.INCREASE, // INCREASE | DECREASE | NONE
        toastUserViewType: ToastUserViewTypeEnum.STANDARD,  // STANDARD | SIMPLE
        animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
        animationOut: DisappearanceAnimation.FLIP_OUT, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
        // TOP_LEFT | TOP_CENTER | TOP_RIGHT | TOP_FULL_WIDTH | BOTTOM_LEFT | BOTTOM_CENTER | BOTTOM_RIGHT | BOTTOM_FULL_WIDTH
        toastPosition: ToastPositionEnum.TOP_CENTER,
        allowHtmlMessage: true,
      });

      // Simply open the popup
      newToastNotification.openToastNotification$();
      this.flag=false

    }


  }

  // all Appointments
  allAppointments(fullName: any) {


    this._PatientsService.getAllDoctorsForBookByName(fullName).subscribe({
      next: data => {
        this.appointmentList = data.body[0].appointments
        // console.log(data.body[0].appointments)


      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }


    })
  }
  // Name
  getName() {
    this.AuthService.decodeToken();
    console.log(this.AuthService.adminInformation.DoctorId)

    this.admin.aboutDoctorsById(this.AuthService.adminInformation.DoctorId).subscribe({
      next: data => {
        this.appointmentList=data.appointments
        // this.name=data.fullName;
        // this.allAppointments(data.fullName);
        // console.log(this.name);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }
  priceBook(event: any) {
    this.price = event.target.value;
    // console.log(this.price)


  }
  // change day empty list and empty price input
  changeDay(event: any) {


    this.timeList = [];
    this.priceInput.nativeElement.value = "";
    this.timeInput.nativeElement.value = "";
    this.day = event.target.value;
    // console.log(this.timeList)
    // console.log(this.day)
  }
  // add time to list
  addTimeToList() {

    if (this.times) {

      this.timeList.push(this.times)
      this.timeInput.nativeElement.value = '';


    }




  }
}
