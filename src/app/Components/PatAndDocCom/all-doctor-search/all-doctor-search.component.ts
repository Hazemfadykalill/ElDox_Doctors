import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PatientsService } from 'src/app/core/services/patients.service';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/core/services/admin.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DoctorDetailsToBookPatients, Pagination } from 'src/app/core/interfaces/patients';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-doctor-search',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule,RouterModule],
  templateUrl: './all-doctor-search.component.html',
  styleUrls: ['./all-doctor-search.component.scss']
})
export class AllDoctorSearchComponent implements OnInit {
  doctorsDetails?: DoctorDetailsToBookPatients[];
  pagesObject?: Pagination;


constructor(private toast: ToastrService, private _PatientsService: PatientsService, private _adminService: AdminService,private activateRouter:ActivatedRoute){}
  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe({
      next:data=>{
        this.allDoctorsById(data.get('id')!);
      }
    })
    
  }

  allDoctorsById(id: any) {
    this._PatientsService.getAllDoctorsForBookById(id).subscribe(
      {

      next: (res) => {

   
        this.doctorsDetails = res.body.data;
        this.pagesObject = res.body.pagination;



      },
      error: (err: HttpErrorResponse) => {
        this.toast.error("Not Found This Doctor By This Department")
      }
    });}
    

    pageChanged(event: any) {
      this._PatientsService.getAllDoctorsForBookByPage(event).subscribe({
        next: (res) => {
          
          this.doctorsDetails = res.body.data;
          this.pagesObject = res.body.pagination;
        },
        error: (err: HttpErrorResponse) => {
          this.toast.error("An Error Ocurred")
        }
      })
  
    }

}
