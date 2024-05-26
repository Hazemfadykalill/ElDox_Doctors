import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import
 { AppearanceAnimation,
   DialogLayoutDisplay,
    DisappearanceAnimation, 
    ToastNotificationInitializer,
     ToastPositionEnum,
      ToastProgressBarEnum,
       ToastUserViewTypeEnum } 
       from '@costlydeveloper/ngx-awesome-popup';
import { AboutDoctor } from 'src/app/core/interfaces/admin';
import { AdminService } from 'src/app/core/services/admin.service';
import { Specialize } from './../../core/interfaces/admin';
import { AboutDoctorNew, AboutDoctorNewTwo } from 'src/app/core/interfaces/doctors';

@Component({
  selector: 'app-edit-doctors',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-doctors.component.html',
  styleUrls: ['./edit-doctors.component.scss']
})
export class EditDoctorsComponent implements OnInit {
  
  @ViewChildren("inputItem")allInput!:QueryList<any>;
  listSpecialize?: Specialize[];
  objectSpecialize: any;
  doctorData?: AboutDoctorNewTwo;
  id!: any;
  path!: any;
  file: any;
  firstName:string="";
  lastName:string="";
  phone:any;
  gender:any;
  email:any;
  BODate:any;

  constructor(private _adminSelect: AdminService, private editId: ActivatedRoute) { }
  ngOnInit(): void {
    this.allSpecialize();

    this.editId.paramMap.subscribe({
      next: data => {
        this.id! = data.get('id')
       
        this._adminSelect.aboutDoctorsById(data.get('id')!).subscribe({
          next: (res) => {
           
            this.doctorData = res;
            this.firstName = res.fullName.split(" ")[0];
            // console.log(res.fullName.split(" ")[0])
            this.lastName = res.fullName.split(" ")[1];
            // this.BODate = res.dateOfBirth.split("T")[0];
            this.email = res.email;
            this.gender = res.gender;
            console.log(res)
            this.phone = res.phone;            
            


          }
        });

      }
    });



  }

  addForm: FormGroup = new FormGroup({
    // Image: new FormControl('', []),
    doctorId: new FormControl('',[Validators.required]),
    photoPath: new FormControl(''),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    dateOfBirth: new FormControl('',[Validators.required]),
    specializationId: new FormControl('',[Validators.required]),
  });

// Image
  onFileSelect(event: any) {
    this.file = event.target.files[0];
    this.path = this.file.name;
    // console.log(this.file.name);
    //  this.addForm.get('Image')!.setValue(this.file);


  }

  onSubmit() {
    // console.log( this.addForm.value);
    this.addForm.value.doctorId = Number(this.id);
    this.addForm.value.specializationId=25
    this.addForm.value.photoPath=this.path;
    // this.addForm.value.SpecializationId=25
    this.addForm.value.PhotoPath = this.path;
    const formData: FormData = new FormData();
    formData.append('Image', this.file, this.file.name);
    formData.append('doctorId', this.addForm.value.doctorId);
    formData.append('photoPath', this.addForm.value.photoPath);
    formData.append('firstName', this.addForm.value.firstName);
    formData.append('lastName', this.addForm.value.lastName);
    formData.append('email', this.addForm.value.email);
    formData.append('phone', this.addForm.value.phone);
    formData.append('gender', this.addForm.value.gender);
    formData.append('dateOfBirth', this.addForm.value.dateOfBirth);
    formData.append('specializationId', this.addForm.value.specializationId);
    // console.log( this.addForm.value);

    this._adminSelect.editDoctors(formData).subscribe({
      next: (data) => {
        const newToastNotification = new ToastNotificationInitializer();

        newToastNotification.setTitle(' Attention!!');
        newToastNotification.setMessage('Doctor Edit Successfully! ');

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
        this.clearInput();
      },
      error: (err: HttpErrorResponse) => {
        // console.log(err);
        const newToastNotification = new ToastNotificationInitializer();

        newToastNotification.setTitle('Attention!!');
        newToastNotification.setMessage('Doctor Edit Something Wrong!');

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
        // console.log(err)
      },
    });
  }

  clearInput() {
    this.allInput.forEach((input)=>input.nativeElement.value = '');
  }


  allSpecialize() {
    this._adminSelect.getAllSpecializations().subscribe({
      next: (data) => {
        this.listSpecialize = data;
        


      }
    })

  }
}
