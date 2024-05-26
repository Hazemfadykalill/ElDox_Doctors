import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseURL: string = 'https://localhost:7198/api/';
  constructor(private _http: HttpClient) { }

  // Get all Patients
  getAllPatients(page: number = 1,): Observable<any> {
    return this._http.get(this.baseURL + `Patients/GetAll?page=${page}&pageSize=12`, { observe: 'response' });
  }
  getAllPatientsAll(): Observable<any> {
    return this._http.get(this.baseURL + `Patients/GetAll?pageSize=12`, { observe: 'response' });
  }
  getAllPatientsBySearch(text: string): Observable<any> {
    return this._http.get(this.baseURL + `Patients/GetAll?NameQuery=${text}`, { observe: 'response' });
  }
  // https://localhost:7198/api/Patients/GetAll?NameQuery=mr


  aboutPatient(id: any): Observable<any> {
    return this._http.get(this.baseURL + `Patients/GetById/${id}`, { observe: 'response' });
  }
  // to patients book from any doctors
  // /Doctors/PatientGetAll?PageNumber=1
  getAllDoctorsForBook(PageNumber:any=1): Observable<any> {
    return this._http.get(this.baseURL + `Doctors/PatientGetAll?PageNumber=${PageNumber}&PageSize=12`, { observe: 'response' });
  }
  getAllDoctorsForBookByPage(page:number=1): Observable<any> {
    return this._http.get(this.baseURL + `Doctors/PatientGetAll?PageNumber=${page}&PageSize=12`, { observe: 'response' });
  }
  getAllDoctorsForBookById(id: any): Observable<any> {
    return this._http.get(this.baseURL + `Doctors/PatientGetAll?SpecializeId=${id}`, { observe: 'response' });
  }
  getAllDoctorsForBookByName(name: any): Observable<any> {
    return this._http.get(this.baseURL + `Doctors/PatientGetAll?NameQuery=${name}`, { observe: 'response' });
  }

}

