import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponsService } from 'src/app/core/services/coupons.service';
import { CouponsList, CouponsObject } from 'src/app/core/interfaces/coupons';
import { HttpErrorResponse } from '@angular/common/http';
import { ButtonLayoutDisplay, ButtonMaker, DialogInitializer, DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';
import { UpdateCouponsComponent } from '../update-coupons/update-coupons.component';
import { AddCouponsComponent } from '../add-coupons/add-coupons.component';

@Component({
  selector: 'app-all-coupons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-coupons.component.html',
  styleUrls: ['./all-coupons.component.scss']
})
export class AllCouponsComponent implements OnInit {
  listAllCoupons!:CouponsObject[];
  constructor(private _CouponsService:CouponsService){}
  ngOnInit(): void {
    this.allCoupons();
    
  }
  allCoupons(){
    this._CouponsService.getAllCoupons().subscribe({
      next:data=>{
        // console.log(data);
        // console.log(data);
        this.listAllCoupons=data
    

      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }

  deleteCoupons(id:number){
    this._CouponsService.Delete(id).subscribe(
      {
      next:data=>{
        // console.log(data);
        this.allCoupons();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    });

  }
  editCoupons(id:number,noRequest:any,code:any,value:any){
   
      
        // Instance of DialogInitializer includes any valid angular component as argument.
        const dialogPopup = new DialogInitializer(UpdateCouponsComponent);
        
        // Any data can be sent to AnyAngularComponent.
        dialogPopup.setCustomData({ id:id,NoReq:noRequest,code:code,val:value}); // optional
        
        // Set some configuration.
        dialogPopup.setConfig({
            width     : '500px',
            
            layoutType: DialogLayoutDisplay.SUCCESS // SUCCESS | INFO | NONE | DANGER | WARNING
        });
        
        // Set some custom buttons as list.
        // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
        dialogPopup.setButtons([
            new ButtonMaker('Edit', 'edit', ButtonLayoutDisplay.DARK), 
            
            new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.WARNING)
        ]);
    
        // Simply open the popup and observe which button is clicked and, 
        // receive optional payload from AnyAngularComponent.
        dialogPopup.openDialog$().subscribe(resp => {
            console.log('dialog response: ', resp);
        });
    }
    

  
  deActiveCoupons(id:number){
    this._CouponsService.deActive(id).subscribe({
      next:data=>{
        // console.log(data);
        this.allCoupons();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }

  Add(){
    
        // Instance of DialogInitializer includes any valid angular component as argument.
        const dialogPopup = new DialogInitializer(AddCouponsComponent);
        
        // Any data can be sent to AnyAngularComponent.
        // dialogPopup.setCustomData({ id:id}); // optional
        
        // Set some configuration.
        dialogPopup.setConfig({
            width     : '500px',
            
            layoutType: DialogLayoutDisplay.SUCCESS // SUCCESS | INFO | NONE | DANGER | WARNING
        });
        
        // Set some custom buttons as list.
        // SUCCESS | INFO | NONE | DANGER | WARNING | PRIMARY | SECONDARY | LINK | DARK | LIGHT
        dialogPopup.setButtons([
            new ButtonMaker('Add', 'add', ButtonLayoutDisplay.DARK), 
            
            new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.WARNING)
        ]);
    
        // Simply open the popup and observe which button is clicked and, 
        // receive optional payload from AnyAngularComponent.
        dialogPopup.openDialog$().subscribe(resp => {
            console.log('dialog response: ', resp);
        });

  }


}
