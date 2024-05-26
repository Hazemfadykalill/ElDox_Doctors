import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-patient',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login-patient.component.html',
  styleUrls: ['./login-patient.component.scss']
})
export class LoginPatientComponent {
  constructor(private _router: Router,private _toast:ToastrService,private _AuthService:AuthService) {}

  LoginPatientForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
   
  });
  handleForm() {
    this._AuthService.loginPatients(this.LoginPatientForm.value).subscribe({
      next: data => {
        // console.log(data)
        localStorage.setItem('tokenAdmin', data.token);
       this._AuthService.decodeToken();
       console.log(this._AuthService.adminInformation);
       if(this._AuthService.adminInformation.Role=="Patient"){
        // this._router.navigate(["/layoutPatient"]);
        this._router.navigate(["/Home"]);

        this._toast.success('Login Patient Success');
       }
       else{
        
        this._toast.error('Login Patient Failed');
       }
    
        // this._router.navigate(['/dashboard']);
      },
      error: (error:HttpErrorResponse) => {
        console.log(error);
        this._toast.error('Login Patient Failed');
      }
    })
    
    

    }

}
