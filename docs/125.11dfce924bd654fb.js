"use strict";(self.webpackChunkVeseeta=self.webpackChunkVeseeta||[]).push([[125,486],{6486:(i,a,s)=>{s.d(a,{H:()=>n});var o=s(9468),r=s(9862);let n=(()=>{class e{constructor(t){this._http=t,this.baseURL="https://localhost:7198/api/"}getAllCoupons(){return this._http.get(this.baseURL+"Coupons/GetAll")}deActive(t){return this._http.put(this.baseURL+`Coupons/Deactivate/${t}`,{headers:{Authorization:"Bearer "+localStorage.getItem("tokenAdmin")}})}Delete(t){return this._http.delete(this.baseURL+`Coupons/Delete/${t}`,{headers:{Authorization:"Bearer "+localStorage.getItem("tokenAdmin")}})}Edit(t){return this._http.put(this.baseURL+"Coupons/Update",t,{headers:{Authorization:"Bearer "+localStorage.getItem("tokenAdmin")}})}add(t){return this._http.post(this.baseURL+"Coupons/Add",t)}static#t=this.\u0275fac=function(h){return new(h||e)(o.LFG(r.eN))};static#e=this.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()}}]);