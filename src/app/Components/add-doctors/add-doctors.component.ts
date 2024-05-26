import { Component, QueryList, ViewChildren, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from 'src/app/core/services/admin.service';
import { AppearanceAnimation, DialogLayoutDisplay, DisappearanceAnimation, ToastNotificationInitializer, ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from '@costlydeveloper/ngx-awesome-popup';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Specialize, SpecializeList } from 'src/app/core/interfaces/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctors',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.scss'],
})
export class AddDoctorsComponent implements OnInit {
  @ViewChildren("inputItem")allInput!:QueryList<any>;
  listSpecialize?:Specialize[];
  constructor(private _adminSelect: AdminService,private _Router:Router) {}
  ngOnInit(): void {
   this.allSpecialize()
  }
  file:any;
  addForm:FormGroup = new FormGroup({
    // Image: new FormControl('', []),

    FirstName: new FormControl('', [Validators.required]),
    LastName: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
    DateOfBirth: new FormControl('', [Validators.required]),
    SpecializationId: new FormControl('', [Validators.required]),
  });
  // 'Image=@h1.jpg;type=image/jpeg'

  onFileSelect(event: any) {
     this.file = event.target.files[0];
    //  this.addForm.get('Image')!.setValue(this.file);

    
  }
  onSubmit() {
    const formData: FormData = new FormData();
    formData.append('Image', this.file,this.file.name);
    formData.append('FirstName', this.addForm.get('FirstName')!.value);
    formData.append('LastName', this.addForm.get('LastName')!.value);
    formData.append('Email', this.addForm.get('Email')!.value);
    formData.append('Gender', this.addForm.get('Gender')!.value);
    formData.append('Phone', this.addForm.get('Phone')!.value);
    formData.append('DateOfBirth', this.addForm.get('DateOfBirth')!.value);
    formData.append('SpecializationId',this.addForm.get('SpecializationId')!.value
    );
   
    this._adminSelect.addDoctors(formData).subscribe({
      next: (data) => {
        this.clearInput();
        this._Router.navigate(["/doctors/allDoctors"])
        const newToastNotification = new ToastNotificationInitializer();
  
        newToastNotification.setTitle(' Attention!!');
        newToastNotification.setMessage('Doctor Add Successfully! ');

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
        
      },
      error: (err) => {

        const newToastNotification = new ToastNotificationInitializer();
  
        newToastNotification.setTitle('Attention!!');
        newToastNotification.setMessage('Doctor Add Something Wrong!');

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
    });
  }

  clearInput(){
    this.allInput.forEach((input)=>input.nativeElement.value = '');
  }

  allSpecialize(){
    this._adminSelect.getAllSpecializations().subscribe({
      next:(data)=>{
        this.listSpecialize = data;
        

      }
    })

  }


}