import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PatientsService } from 'src/app/core/services/patients.service';
import { AppearanceAnimation, ButtonLayoutDisplay, ButtonMaker, ConfirmBoxInitializer, DialogInitializer, DialogLayoutDisplay, DisappearanceAnimation } from '@costlydeveloper/ngx-awesome-popup';
import { ProfileDoctorComponent } from '../../PatAndDocCom/profile-doctor/profile-doctor.component';
import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-nav-bar-doctor',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './nav-bar-doctor.component.html',
  styleUrls: ['./nav-bar-doctor.component.scss']
})
export class NavBarDoctorComponent {
  constructor(private _Router: Router,private _PatientsService:PatientsService,private home:HomeService) { }




  logOut() {
  

    const newConfirmBox = new ConfirmBoxInitializer();

    newConfirmBox.setTitle('😎Attention');
    newConfirmBox.setMessage(
      'Are you sure you Log out!'
    );

    // Choose layout color type
    newConfirmBox.setConfig({
      layoutType: DialogLayoutDisplay.INFO, // SUCCESS | INFO | NONE | DANGER | WARNING
      animationIn: AppearanceAnimation.ZOOM_IN_ROTATE, // BOUNCE_IN | SWING | ZOOM_IN | ZOOM_IN_ROTATE | ELASTIC | JELLO | FADE_IN | SLIDE_IN_UP | SLIDE_IN_DOWN | SLIDE_IN_LEFT | SLIDE_IN_RIGHT | NONE
      animationOut: DisappearanceAnimation.SLIDE_OUT_UP, // BOUNCE_OUT | ZOOM_OUT | ZOOM_OUT_WIND | ZOOM_OUT_ROTATE | FLIP_OUT | SLIDE_OUT_UP | SLIDE_OUT_DOWN | SLIDE_OUT_LEFT | SLIDE_OUT_RIGHT | NONE
      allowHtmlMessage: true,
      buttonPosition: 'center', // optional
    });

    newConfirmBox.setButtonLabels('OK', 'Cancel');

    // Simply open the popup and observe button click
    newConfirmBox.openConfirmBox$().subscribe((resp) => {
      if (resp.clickedButtonID == 'ok') {
        localStorage.removeItem('tokenDoctor');
        // window.location.reload();
        this._Router.navigate(['/auth/loginAdmin']);


      } else {
      }
    });

  }

  profileDoctors(){
    const dialogPopup = new DialogInitializer(ProfileDoctorComponent);
   // Any data can be sent to AnyAngularComponent.
  //  dialogPopup.setCustomData({ id:id}); // optional
        
   // Set some configuration.
   dialogPopup.setConfig({
       width     : '500px',
       
       layoutType: DialogLayoutDisplay.INFO // SUCCESS | INFO | NONE | DANGER | WARNING
      
   });
   
   // Set some custom buttons as list.
   // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
   dialogPopup.setButtons([
      //  new ButtonMaker('Edit', 'edit', ButtonLayoutDisplay.DARK), 
       
       new ButtonMaker('Ok', 'cancel', ButtonLayoutDisplay.INFO)
   ]);

   // Simply open the popup and observe which button is clicked and, 
   // receive optional payload from AnyAngularComponent.
   dialogPopup.openDialog$().subscribe(resp => {
       console.log('dialog response: ', resp);
   });


  }
  BackHome(){
    this.home.back();
  }
  

}
