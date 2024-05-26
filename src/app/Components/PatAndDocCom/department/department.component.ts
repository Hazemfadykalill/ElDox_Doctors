import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from 'src/app/core/services/admin.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Specialize } from 'src/app/core/interfaces/admin';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  listSpecialize?: Specialize[];
  constructor(private _AdminService: AdminService) { }
  ngOnInit(): void {
    this.allSpl();
  }





  // all spl
  allSpl() {
    this._AdminService.getAllSpecializations().subscribe({
      next: (data) => {
        // console.log(data);
        this.listSpecialize = data;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }
  allDepartmentByName(event: any) {
    // console.log(event.target.value);
    if(event.target.value){
      this._AdminService.getAllSpecializationsByName(event.target.value).subscribe(
        {
          next: (res) => {
            // console.log(res);
            this.listSpecialize=res;
            
          
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
          }
    
      });

    }
    else{
      this.allSpl();
    }
    
  }
 
}
