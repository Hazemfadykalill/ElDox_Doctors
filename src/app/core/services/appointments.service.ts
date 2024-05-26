import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  baseURL: string = 'https://localhost:7198/api/';
  constructor(private _http: HttpClient) { }
  // Delete
  deleteAppointments(id: number): Observable<any> {
    return this._http.delete(this.baseURL +`Appointments/DeleteTime?id=${id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("tokenAdmin")
      }
    });

  }
  // Add
  addAppointments(priceApp: any, day: any, arrTimes: string[]): Observable<any> {
    return this._http.post(this.baseURL + `Appointments/Add`,

      {
        "price": priceApp,
        "days": [
          {
            "day": day,
            "times": arrTimes
          }
        ]
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("tokenAdmin")
        }
      },
    );

  }
  // Update
  editAppointments(id: number,time:any): Observable<any> {
    return this._http.put(this.baseURL + `Appointments/UpdateTime`, {
      "id": id,
      "time": time
    },
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("tokenAdmin")
      }
    });

  }

}
