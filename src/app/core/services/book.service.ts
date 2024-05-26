import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // https://localhost:7198/api/Bookings/DoctorGetAll?Day=Sunday
// https://localhost:7198/api/Bookings/DoctorGetAll
  baseURL:string='https://localhost:7198/api/';
  constructor(private _http:HttpClient) { }
  patientBook(id:any,code:any,realTime:any):Observable<any>{
    return this._http.post(this.baseURL+"Bookings/Book",{
      "appointmentTimeId": id,
      "discountCode": code,
      "appointmentRealTime":realTime
    },{
      headers:{
        Authorization: 'Bearer ' +localStorage.getItem("tokenAdmin")
      }
    
    });

  }

getAllPatBookInDoctor():Observable<any>{
  return this._http.get(this.baseURL+'Bookings/DoctorGetAll',{
    headers:{
      Authorization: 'Bearer ' +localStorage.getItem("tokenDoctor")
    }
  
  })

}
getAllPatBookInDoctorByDay(day:string):Observable<any>{
  return this._http.get(this.baseURL+`Bookings/DoctorGetAll?Day=${day}`,{
    headers:{
      Authorization: 'Bearer ' +localStorage.getItem("tokenDoctor")
    }
  
  })

}
}