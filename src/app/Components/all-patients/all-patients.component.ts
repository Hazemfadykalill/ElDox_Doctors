import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrService } from 'ngx-toastr';
import { ObjectPatients, Pagination } from 'src/app/core/interfaces/patients';
import { PatientsService } from 'src/app/core/services/patients.service';

@Component({
  selector: 'app-all-patients',
  standalone: true,
  imports: [CommonModule,RouterModule,NgxPaginationModule],
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.scss']
})
export class AllPatientsComponent implements OnInit {
  patientsList?:any;
  mail:string="mailTo"
  patientsObject?:Pagination;
  constructor(private _PatientsService:PatientsService,private _tost:ToastrService){}
  ngOnInit(): void {
    this.allPat();
   
  }
allPat(){
  this._PatientsService.getAllPatientsAll().subscribe({
    next:res=>{
      console.log(res.body)
      this.patientsList=res.body.data;
      this.patientsObject=res.body.pagination;
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
  })


}
  pageChanged(event:any){
    // console.log(event)
    
    this._PatientsService.getAllPatients(event).subscribe
    ({
      next:res=>{
        console.log(res.body)
        this.patientsList=res.body.data;
        this.patientsObject=res.body.pagination;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }
  changeAllPatients(event:any){
    this._PatientsService.getAllPatientsBySearch(event.target.value).subscribe({
      next:(res)=>{
        console.log(res.body)
        this.patientsList=res.body.data;
        this.patientsObject=res.body.pagination;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    });

  }


}
