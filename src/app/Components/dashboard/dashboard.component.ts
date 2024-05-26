import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DoctorsComponent } from '../doctors/doctors.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,DoctorsComponent,NavbarComponent,FooterComponent,RouterLinkActive,],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent    {
  constructor(private _Renderer2:Renderer2){}


  


  
  

  }
  
// @ViewChild("leftHidden") hidden!:ElementRef;
//  width:any=this.hidden.nativeElement.offsetWidth;
//  left:any=this.hidden.nativeElement.getBoundingClientRect().left
//   this._Renderer2.setStyle(this.hidden.nativeElement,"left","0");




