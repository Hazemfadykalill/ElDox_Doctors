
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, QueryList, ViewChildren, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from 'src/app/core/services/admin.service';
import { AppearanceAnimation, DialogLayoutDisplay, DisappearanceAnimation, ToastNotificationInitializer, ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from '@costlydeveloper/ngx-awesome-popup';

import { Specialize, SpecializeList } from 'src/app/core/interfaces/admin';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  file?: any;
  constructor(
    private _router: Router,
    private _toast: ToastrService,
    private _auth: AuthService
  ) { }

  registerForm: FormGroup = new FormGroup({

    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // Image: new FormControl(''),

    gender: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      ),
    ]),
  });

  change(event: any) {
    this.file = event.target.files[0];
  }
  handleForm() {
    console.log(this.registerForm.value)
    const formData: FormData = new FormData();
    
    formData.append('firstName', this.registerForm.value.firstName);
    formData.append('lastName', this.registerForm.value.lastName);
    formData.append('email', this.registerForm.value.email);
    formData.append('phone', this.registerForm.value.phone);

    formData.append('gender', this.registerForm.value.gender);
    formData.append('dateOfBirth', this.registerForm.value.dateOfBirth);
    formData.append('password', this.registerForm.value.password);
    formData.append('image', this.file, this.file.name);
    console.log(this.registerForm.value)

    this._auth.registerPatients(formData).subscribe({
      next: (data) => {
        console.log(data);
        this._router.navigate(['/auth/loginAdmin']);

        const newToastNotification = new ToastNotificationInitializer();

        newToastNotification.setTitle(' Attention!!');
        newToastNotification.setMessage('Patients Add Successfully! ');

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
      error: (err: HttpErrorResponse) => {
        console.log(err)
        const newToastNotification = new ToastNotificationInitializer();

        newToastNotification.setTitle('Attention!!');
        newToastNotification.setMessage('Patients Add Something Wrong!');

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
}
