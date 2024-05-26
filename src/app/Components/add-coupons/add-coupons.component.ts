import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CouponsService } from 'src/app/core/services/coupons.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-coupons',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-coupons.component.html',
  styleUrls: ['./add-coupons.component.scss']
})
export class AddCouponsComponent {
  private subscriptions: Subscription = new Subscription();
    
  // Dependency Injection of the dialogBelonging in constructor is crucial.
  constructor(@Inject('dialogBelonging') public dialogBelonging: DialogBelonging,private _CouponsService:CouponsService,private toast:ToastrService) {}
  
  ngOnInit(): void {
      // Check received data and other available features.
      // console.log(this.dialogBelonging.customData.id);
      // this.idToEdit=this.dialogBelonging.customData.id;
      
      // Subscribe to button listeners.
      this.subscriptions.add(
          // IDialogEventsController
          this.dialogBelonging.eventsController.onButtonClick$.subscribe((_Button) => {
              if (_Button.ID === 'add') {
              this._CouponsService.add(this.addForm.value).subscribe({
                next: data => {
                  // console.log(data);
                  this.toast.success("Added Coupons Success ")
                  this.dialogBelonging.eventsController.close();
                  
                  window.location.reload();
                },
                error: error => {
                  // console.log(error);
                  this.toast.error("Added Coupons Failure ")
                  this.dialogBelonging.eventsController.close();
                }
              })
              }
              else  {
                  
                  // Do some logic and close popup.
                  this.dialogBelonging.eventsController.close();
              }
          })
      );
      
      // Timeout emulates async data.
      // setTimeout(() => {
      //     // Close the loader after some data is ready.
      //     // IDialogEventsController
      //     this.dialogBelonging.eventsController.closeLoader();
      // }, 1000);
  }
  addForm:FormGroup=new FormGroup({
    discountCode:new FormControl("",[Validators.required]),
    numOfRequests:new FormControl("",[Validators.required]),
    discountType:new FormControl("Percentage",[Validators.required]),
    value:new FormControl("",[Validators.required]),


  });
  // -d '{
  //   "discountCode": "hazem",
  //   "numOfRequests": 4,
  //   "discountType": "Percentage",
  //   "value": 90


  
  ngOnDestroy(): void {
      // Care about memory and close all subscriptions.
      this.subscriptions.unsubscribe();
  }

}
