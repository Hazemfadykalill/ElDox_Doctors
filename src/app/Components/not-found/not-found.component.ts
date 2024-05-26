import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private router:Router) { }
  NotFound(){
    if(localStorage.getItem("tokenAdmin")!=null){
      this.router.navigate(['/dashboard']);
    }
    else if(localStorage.getItem("tokenDoctor")!=null){
      this.router.navigate(['/welcome']);
    }
    else if(localStorage.getItem("tokenPatient")!=null){
      this.router.navigate(['/Home']);
    }
  }

}
