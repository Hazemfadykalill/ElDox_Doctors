import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from 'src/app/core/services/admin.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AboutDoctor } from 'src/app/core/interfaces/admin';
import { ToastrService } from 'ngx-toastr';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation
} from '@costlydeveloper/ngx-awesome-popup';
import { AboutDoctorNew } from 'src/app/core/interfaces/doctors';
@Component({
  selector: 'app-about-doctors',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './about-doctors.component.html',
  styleUrls: ['./about-doctors.component.scss']
})
export class AboutDoctorsComponent implements OnInit{
  id?:any;
  aboutDoctors?:AboutDoctorNew;
  DOBirth:any;
  constructor(private _adminService:AdminService,private idActive:ActivatedRoute,private _tost:ToastrService,private router:Router ){}
  ngOnInit(): void {
    this.idActive.paramMap.subscribe({
      next:data=>{
      
  this.id!= data.get('id')
  
       this.doctorAbout( data.get('id')!)
      }
      
    })
 
    
    
  }
  doctorAbout(id?:string){
    this._adminService.aboutDoctorsById(id!).subscribe({
      next:data=>{
        // console.log(data)
        this.aboutDoctors=data;
        this.DOBirth=data.dateOfBirth
      },
      error:err=>{
        this._tost.error("Error Please try again")
      }
    })
  }

 
  deleteDoctor(){
    this._adminService.deleteDoctorById(this.id).subscribe({
      next:data=>{
        // console.log(this.id)
       
      this._tost.success("Doctor successfully deleted ")
      this.doctorAbout(this.id);
       
      },
      error:err=>{
        this._tost.error("An error occurred When Delete Doctor")
      }
    })
    
  }
  confirmDelete()
  {
    
    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('Notifaction');
    newConfirmBox.setMessage('Are You Sure Deleted');

    // Choose layout color type
    newConfirmBox.setConfig({
    layoutType: DialogLayoutDisplay.DANGER, // SUCCESS | INFO | NONE | DANGER | WARNING
    animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
    animationOut: DisappearanceAnimation.SLIDE_OUT_UP, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
    allowHtmlMessage: true,
    buttonPosition: 'center', // optional 
    });

    newConfirmBox.setButtonLabels('OK', 'Cancel');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe(resp => {
      if(resp.clickedButtonID=="cancel") {

        
      }
      else{
        this.deleteDoctor();
        console.log("Deleted")

      }
    });
  }
  edit(id:any){
    const newConfirmBox = new ConfirmBoxInitializer();
  
      newConfirmBox.setTitle('😎Attention');
      newConfirmBox.setMessage(
        'Are you sure you Edit doctor!'
      );
  
      // Choose layout color type
      newConfirmBox.setConfig({
        layoutType: DialogLayoutDisplay.CUSTOM_ONE, // SUCCESS | INFO | NONE | DANGER | WARNING
        animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
        animationOut: DisappearanceAnimation.SLIDE_OUT_UP, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
        allowHtmlMessage: true,
        buttonPosition: 'center', // optional
      });
  
      newConfirmBox.setButtonLabels('OK', 'Cancel');
  
      // Simply open the popup and observe button click
      newConfirmBox.openConfirmBox$().subscribe((resp) => {
        if (resp.clickedButtonID == 'ok') {
          this.router.navigate(['/doctors/editDoctors',id])
         
        } else {
        }
      });
  
  }
  

}
