import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarPatientComponent } from '../../Navs/nav-bar-patient/nav-bar-patient.component';
import { FooterDocAndPatComponent } from '../../footer-doc-and-pat/footer-doc-and-pat.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patient-layout',
  standalone: true,
  imports: [CommonModule,NavBarPatientComponent,FooterDocAndPatComponent,RouterModule],
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.scss']
})
export class PatientLayoutComponent {

}
