import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';
import { Subscription } from 'rxjs';
import { Patients } from 'src/app/core/interfaces/patients';
import { PatientsService } from 'src/app/core/services/patients.service';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-profile-patient',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.scss']
})
export class ProfilePatientComponent implements OnInit {
  private subscriptions: Subscription = new Subscription();
  patientId: any;
  patientDetails?: Patients;

  // Dependency Injection of the dialogBelonging in constructor is crucial.
  constructor(private _Router: Router, @Inject('dialogBelonging') public dialogBelonging: DialogBelonging, private _AuthService: AuthService, private _PatientsService: PatientsService) { }
  ngOnInit(): void {
    this._AuthService.decodeToken();
    // console.log(this._AuthService.adminInformation.Id);
    this.patientId = this._AuthService.adminInformation.Id;
    this._PatientsService.aboutPatient(this._AuthService.adminInformation.Id).subscribe({
      next: data => {
        // console.log(data.body)
        this.patientDetails = data.body;
        // console.log(this.patientDetails?.details?.photoPath)

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
  bookPatient(id: any) {
    this._Router.navigate(['/Booking']);
    this.dialogBelonging.eventsController.close();
  }



}


