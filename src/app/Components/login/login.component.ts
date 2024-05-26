import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private _router: Router, private _toast: ToastrService, private auth: AuthService) { }

  loginAdminForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  handleForm() {
    


    this.auth.loginAdmin(this.loginAdminForm.value).subscribe({
      next: (res) => {
        // localStorage.setItem("tokenAdmin", res.token);
        // this.auth.decodeToken();
        this.auth.decodeToken2(res.token);
       
        if (localStorage.getItem("tokenAdmin")!=null) {
          // localStorage.setItem("tokenAdmin", res.token);
          this._router.navigate(['/dashboard']);
          this._toast.success('Login Admin Success');
          

        }
        else if(this.auth.adminInformation.Role == "Patient"){
          this._router.navigate(["/Home"]);
          // localStorage.setItem("tokenPatients", res.token);


        this._toast.success('Login Patient Success');

        }
        else if(this.auth.adminInformation.Role == "Doctor"){
          this._router.navigate(['/welcome']);
          // localStorage.setItem("tokenDoctor", res.token);
          this._toast.success('Login Doctor successfully');

        }
        else {
          this._toast.error('Login Failed');
        }

      },
      error: (err) => {
        console.log(err)
        this._toast.error('Login Failed ....');
      },
    })



  }

}

