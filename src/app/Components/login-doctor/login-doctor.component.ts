import { AuthService } from 'src/app/core/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-doctor',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.scss']
})
export class LoginDoctorComponent {
  constructor(private _router: Router,private _toast:ToastrService,private _AuthService:AuthService) {}

  LoginDoctorsForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
   
  });
  handleForm() {
    this._AuthService.loginDoctors(this.LoginDoctorsForm.value).subscribe({
      next: data => {
        localStorage.setItem("tokenAdmin",data.token)
        this._AuthService.decodeToken();
        console.log(this._AuthService.adminInformation)
        if(this._AuthService.adminInformation.Role=="Doctor"){
          // console.log(this._AuthService.adminInformation.Role)
          this._router.navigate(['/welcome']);
          this._toast.success('Login Doctor successfully');
        }
        else{
          this._toast.error('Login Doctor Failed');

        }
       
      },
      error: error => {
        this._toast.error('Login Doctor Failed');
      }
    })
    

    }

}
