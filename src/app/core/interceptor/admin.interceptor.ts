import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AdminInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem("tokenAdmin") !== null) {
      let headersToken = {

        Authorization: 'Bearer ' + localStorage.getItem("tokenAdmin"),
        observe: 'response'




      }
      request = request.clone({
        setHeaders: headersToken
      })

    } 
    else if(localStorage.getItem("tokenDoctor")!=null){
      let headersToken = {

        Authorization: 'Bearer ' + localStorage.getItem("tokenDoctor"),
        observe: 'response'




      }
      request = request.clone({
        setHeaders: headersToken
      })

      
    }
    else if(localStorage.getItem("tokenPatient")!=null){
      let headersToken = {

        Authorization: 'Bearer ' + localStorage.getItem("tokenPatient"),
        observe: 'response'




      }
      request = request.clone({
        setHeaders: headersToken
      })

      
    }

    return next.handle(request);
  }
}
