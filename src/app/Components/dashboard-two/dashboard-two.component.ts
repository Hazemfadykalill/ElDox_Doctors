import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TopDoctors, TopSpecializations } from 'src/app/core/interfaces/admin';
import { AdminService } from 'src/app/core/services/admin.service';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard-two',
  standalone: true,
  imports: [CommonModule,RouterLink,CarouselModule,BaseChartDirective],
  templateUrl: './dashboard-two.component.html',
  styleUrls: ['./dashboard-two.component.scss']
})
export class DashboardTwoComponent implements OnInit {
  @ViewChild("newDoctor") docSearch!:ElementRef;
  @ViewChild("newPatient") paSearch!:ElementRef;
  @ViewChild("newAppointment") appSearch!:ElementRef;
  
  topDoctors?:TopDoctors[];
  topSpecial?:TopSpecializations[];
  numDoctors?:Number;
  numPatients?:Number;
  NamesSpl?:string[];
  numberSpl?:number[];
  numOfReq?:any;
  lastDoctor?:string='Last24Hours';
  lastPatient?:string='Last24Hours';
  lastAppointment?:string='Last24Hours';
  constructor(private _AdminService:AdminService){}
  // =====
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    // labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Num' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Num' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  // =====
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
   pieChartLabels:any; ;
 pieChartDatasets:any = [ {
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  ngOnInit(): void {
    this.topSpecializations();
  this.getTopDoctors();
 
  this.doctorSearch();
  this.patientSearch();
  this.NumOfRequest();
 

  }
// top
  getTopDoctors(){
    this._AdminService.getTopDoctors().subscribe({

      next: (data) => {
        this.topDoctors=data;
        console.log(data);
        this.barChartData.labels=  data.map((N:any)=>N.fullName);
        this.barChartData.datasets[0].data=  data.map((N:any)=>N.num);
        this.barChartData.datasets[1].data=  data.map((N:any)=>N.num);

      },
      error:(error:HttpErrorResponse)=>{
        console.log("Error when getting 10 top doctors ")
      }
    })

  }

  topSpecializations(){
    this._AdminService.getTopSpecializations().subscribe({
      next: (data) => {
        console.log(data)

        this.topSpecial=data;
      this.pieChartLabels=  data.map((N:any)=>N.fullName);
      this.pieChartDatasets[0].data=  data.map((N:any)=>N.num);

        
       

      },
      error:(error:HttpErrorResponse)=>{
        console.log("Error when getting 10 top doctors ")
      }
    })

  }

  doctorSearch(search:any="Last24Hours"){
    this._AdminService.getNumDoctors(search).subscribe({
      next: (data) => {
        this.numDoctors=data;

      },
      error:(error:HttpErrorResponse)=>{
        console.log("Error when getting num doctors ")
      }
    })

  }

  patientSearch(search:any="Last24Hours"){
    this._AdminService.getNumPatient(search).subscribe({
      next: (data) => {
        this.numPatients=data;

      },
      error:(error:HttpErrorResponse)=>{
        console.log("Error when getting num Patients ")
      }
    })
  }
  NumOfRequest(search:any="Last24Hours"){
    this._AdminService.getNumOfRequest(search).subscribe({
      next: (data) => {
        console.log(data)
        this.numOfReq=data;

      },
      error:(error:HttpErrorResponse)=>{
        console.log("Error when getting num of requests ")
      }
    })
  }
  change(event:any){
    this.lastDoctor=event.target.value;
    this.doctorSearch(event.target.value)
 
    // this.NumOfRequest(event.target.value)
  }
  change1(event:any){
    this.lastPatient=event.target.value;
    this.patientSearch(event.target.value)
 
    // this.NumOfRequest(event.target.value)
  }
  change2(event:any){
    this.lastAppointment=event.target.value;
    this.NumOfRequest(event.target.value)
 
    // this.NumOfRequest(event.target.value)
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // navSpeed: 700,
    autoplay:true,
    autoplayTimeout:500,
    autoplaySpeed:400,
  
  items:4
   
  }

 namesAndNumber(arr:TopSpecializations[]){

  arr.forEach(element => {
    this.NamesSpl!.push(element.fullName);
    this.numberSpl!.push(element.num);
  });
  this.pieChartLabels=this.NamesSpl;

 }

}
