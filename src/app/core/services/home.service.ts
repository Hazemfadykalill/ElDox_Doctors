import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private router:Router) { }
  back(){
    if(localStorage.getItem("tokenAdmin")){
      this.router.navigate(['/dashboard']);

    }
   else if(localStorage.getItem("tokenPatient")){
      this.router.navigate(['/Home']);
      
    }
    else if(localStorage.getItem("tokenDoctor")){
      this.router.navigate(['/welcome']);
      
    }
  }
}
