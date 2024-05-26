import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL:string='https://localhost:7198/api/';
  adminInformation:any;
  constructor(private _http:HttpClient) { }

  // Admin
  loginAdmin(value:object):Observable<any>{
    return this._http.post(this.baseURL+"Authentication/Login",value)
  }
  decodeToken(){
    let encodeTokenAdmin=localStorage.getItem("tokenAdmin");
    let encodeTokenDoctor=localStorage.getItem("tokenDoctor");
    let encodeTokenPatient=localStorage.getItem("tokenPatient");
    if(encodeTokenAdmin!=null){
      let decodeToken=jwtDecode(encodeTokenAdmin);
      this.adminInformation=decodeToken;
      
    }
    else if(encodeTokenDoctor!=null){
      let decodeToken=jwtDecode(encodeTokenDoctor);
      this.adminInformation=decodeToken;
      
    }
    else if(encodeTokenPatient!=null){
      let decodeToken=jwtDecode(encodeTokenPatient);
      this.adminInformation=decodeToken;

    }
  }
  decodeToken2(taken:any){
    
    let decodeTokenRole=jwtDecode(taken);
    // console.log(decodeTokenRole)
    this.adminInformation=decodeTokenRole;
    if(this.adminInformation.Role=="Admin"){
      localStorage.setItem("tokenAdmin",taken);

    }
    else if(this.adminInformation.Role=="Doctor"){
      localStorage.setItem("tokenDoctor",taken);

    }
    else if(this.adminInformation.Role=="Patient"){
      localStorage.setItem("tokenPatient",taken);

    }
    
  }

  // Patient
  registerPatients(value:object):Observable<any>{
    return this._http.post(this.baseURL+"Patients/Register",value,);

  }

  
  loginPatients(value:object):Observable<any>{
    return this._http.post(this.baseURL+"Authentication/Login",value)
  }
  loginDoctors(value:object):Observable<any>{
    return this._http.post(this.baseURL+"Authentication/Login",value)
  }


}
