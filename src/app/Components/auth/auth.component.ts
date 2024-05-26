import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,FooterComponent,RouterOutlet,CarouselModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // navSpeed: 700,
    autoplay:true,
    autoplayTimeout:600,
    autoplaySpeed:500,
    
   
    // navSpeed: 700,
    items:1,
   
   
  }

}
