import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DialogBelonging } from '@costlydeveloper/ngx-awesome-popup';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CouponsService } from 'src/app/core/services/coupons.service';

@Component({
    selector: 'app-update-coupons',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './update-coupons.component.html',
    styleUrls: ['./update-coupons.component.scss']
})
export class UpdateCouponsComponent implements OnInit {
    idToEdit: any;
    code: any;
    value: any;
    num: any;
    private subscriptions: Subscription = new Subscription();

    
    constructor(private _CouponsService: CouponsService, @Inject('dialogBelonging') public dialogBelonging: DialogBelonging) { }

    ngOnInit(): void {
        // Check received data and other available features.
        // console.log(this.dialogBelonging.customData.code);
        this.idToEdit = this.dialogBelonging.customData.id;
        this.code = this.dialogBelonging.customData.code;
        this.value = this.dialogBelonging.customData.val;
        this.num = this.dialogBelonging.customData.NoReq;

        // Subscribe to button listeners.
        this.subscriptions.add(
            // IDialogEventsController
            this.dialogBelonging.eventsController.onButtonClick$.subscribe((_Button) => {
                if (_Button.ID === 'edit') {
                    this.editForm.value.id = this.idToEdit;
                    // console.log(this.editForm.value);
                    this._CouponsService.Edit(this.editForm.value).subscribe({
                        next: (data) => {
                            
                            

                            this.dialogBelonging.eventsController.close();
                            window.location.reload();
                        },
                        error: (error) => {
                            
                            this.dialogBelonging.eventsController.close();
                        }

                    })



                    // Do some logic for example edit user.
                }
                else {

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
// Form
    editForm: FormGroup = new FormGroup({
        id: new FormControl("",),

        discountCode: new FormControl("", [Validators.required]),
        numOfRequests: new FormControl("", [Validators.required]),
        discountType: new FormControl("Percentage", [Validators.required]),
        value: new FormControl("", [Validators.required]),


    });

}
