import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Patients } from 'src/app/core/interfaces/patients';
import { Router } from '@angular/router';
import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';
import { AdminService } from 'src/app/core/services/admin.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AboutDoctor } from 'src/app/core/interfaces/admin';

@Component({
  selector: 'app-profile-doctor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.scss']
})
export class ProfileDoctorComponent {
  private subscriptions: Subscription = new Subscription();
  patientId: any;
 DoctorDetails?: AboutDoctor;

  // Dependency Injection of the dialogBelonging in constructor is crucial.
  constructor(private _Router: Router, @Inject('dialogBelonging') public dialogBelonging: DialogBelonging,  private _AdminService: AdminService,private _AuthService:AuthService) { }
  ngOnInit(): void {
    this._AuthService.decodeToken();
    
    this.patientId = this._AuthService.adminInformation.DoctorId;
    console.log(this._AuthService.adminInformation);//53
    this._AdminService.aboutDoctorsById(this._AuthService.adminInformation.DoctorId).subscribe({
      next: data => {
        console.log(data)
        this.DoctorDetails = data;
      
     

      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })

    // Check received data and other available features.
    // console.log(this.dialogBelonging.customData.id);
    // this.idToEdit = this.dialogBelonging.customData.id;

    // Subscribe to button listeners.
    this.subscriptions.add(
      // IDialogEventsController
      this.dialogBelonging.eventsController.onButtonClick$.subscribe((_Button) => {
        this.dialogBelonging.eventsController.close();

      })
    );

    // Timeout emulates async data.
    setTimeout(() => {
      // Close the loader after some data is ready.
      // IDialogEventsController
      this.dialogBelonging.eventsController.closeLoader();
    }, 1000);

  }
  bookPatient() {
    this._Router.navigate(['/Book']);
    this.dialogBelonging.eventsController.close();
  }

}
