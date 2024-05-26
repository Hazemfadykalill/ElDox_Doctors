import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarDoctorComponent } from '../../Navs/nav-bar-doctor/nav-bar-doctor.component';
import { FooterDocAndPatComponent } from '../../footer-doc-and-pat/footer-doc-and-pat.component';

@Component({
  selector: 'app-doctor-layout',
  standalone: true,
  imports: [CommonModule,RouterModule,NavBarDoctorComponent,FooterDocAndPatComponent],
  templateUrl: './doctor-layout.component.html',
  styleUrls: ['./doctor-layout.component.scss']
})
export class DoctorLayoutComponent {

}
