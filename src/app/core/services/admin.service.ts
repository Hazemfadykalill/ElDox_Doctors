import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
   httpOptions:any = { headers: new HttpHeaders({'pagination': 'application/json'}),
    observe: 'response' as 'response',
   
  };
  baseURL:string='https://localhost:7198/api/';
  constructor(private _http: HttpClient) {}
   headers:any = new HttpHeaders({
    'Authorization': 'Bearer ' +localStorage.getItem("tokenAdmin")
  });
  // tokenHeaders: any = {
  //   token: localStorage.getItem('tokenAdmin'),
  // };
  // top
  getTopDoctors(): Observable<any> {
    return this._http.get(this.baseURL+'Dashboard/Top10Doctors'
    );
  }
  getTopSpecializations(): Observable<any> {
    return this._http.get(this.baseURL+'Dashboard/Top5Specializations'
    );
  }

  // search

  getNumDoctors(search: any = 'Last24Hours'): Observable<any> {
    return this._http.get(this.baseURL+`Dashboard/NumOfDoctors?search=${search}`
    );
  }
  getNumPatient(search: any = 'Last24Hours'): Observable<any> {
    return this._http.get(this.baseURL+`Dashboard/NumOfPatients?search=${search}`
    );
  }
  getNumOfRequest(search: any = 'Last24Hours'): Observable<any> {
    return this._http.get(this.baseURL+`Dashboard/NumOfRequests?search=${search}`
    );
  }

  // Admin All Doctors
  getAllDoctorsAdmin(
    pageNumber: number,
    pageSize: number
  ): Observable<any> {
    
    // https://localhost:7198/api/Doctors/AdminGetAll?page=2&pageSize=10&search=ja

    return this._http.get(this.baseURL+`Doctors/AdminGetAll?page=${pageNumber}&pageSize=${pageSize}`,this.httpOptions
    );
  }
  getAllDoctorsAdminSearch(search: number): Observable<any> {
    // https://localhost:7198/api/Doctors/AdminGetAll?page=2&pageSize=10&search=ja

    return this._http.get(this.baseURL+`Doctors/AdminGetAll?SpecializeId=${search}`,{ observe:'response',
        headers:new HttpHeaders({'pagination':'application/json'},
          
        ),
        responseType: 'blob'
      }
    );
  }

  aboutDoctorsById(id: any): Observable<any> {
    return this._http.get(this.baseURL+`Doctors/GetById/${id}`,
    );
  }
  deleteDoctorById(id: any): Observable<any> {
    return this._http.delete(this.baseURL+`Doctors/Delete/${id}`,
      {
        headers:{
          Authorization: 'Bearer ' +localStorage.getItem("tokenAdmin")
        }
      
      }
    );
  }

  // Add Doctors
  addDoctors(value:any):Observable<any>{
    return this._http.post(this.baseURL+"Doctors/Add",value);

  }

  // All Specializations
  getAllSpecializations(): Observable<any> {
    return this._http.get(
      this.baseURL+'Specializations/GetAll'
    );
  }
  getAllSpecializationsByName(name:any): Observable<any> {
    return this._http.get(
      this.baseURL+`Specializations/FindByName?NameQuery=${name}`
    );
  }

  editDoctors(value:any):Observable<any>{
    return this._http.put(this.baseURL+"Doctors/Edit",value);

  }
}
