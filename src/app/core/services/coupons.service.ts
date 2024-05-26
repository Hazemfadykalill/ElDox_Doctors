import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  baseURL:string='https://localhost:7198/api/';

  constructor(private _http:HttpClient) { }
  getAllCoupons():Observable<any>{
    return this._http.get(this.baseURL+"Coupons/GetAll");
  }
  deActive(id:number):Observable<any>{
    return this._http.put(this.baseURL+`Coupons/Deactivate/${id}`,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("tokenAdmin")
      }
    });
    
  }
   Delete(id:number):Observable<any>{
    return this._http.delete(this.baseURL+`Coupons/Delete/${id}`,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("tokenAdmin")
      }
    });
    
  }
  Edit(value:any):Observable<any>{
    return this._http.put(this.baseURL+`Coupons/Update`,value,{
      headers:{
        Authorization: "Bearer "+localStorage.getItem("tokenAdmin")
      }
    });
    
  }
 
  add(value:any):Observable<any>{
    return this._http.post(this.baseURL+"Coupons/Add",value);
    
  }
}
