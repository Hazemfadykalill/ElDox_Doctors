import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminInterceptor } from './core/interceptor/admin.interceptor';
import { LoadingInterceptor } from './core/interceptor/loading.interceptor';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

// import { PToastModule } from 'primeng/toast'; 
// import { register } from 'swiper/element/bundle';
// // register Swiper custom elements
// register();

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    
    NgxSpinnerModule,
    
    CarouselModule,
    NgxTypedJsModule,
  
    ToastrModule.forRoot(),
    HttpClientModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot(),
    NgxPaginationModule,
    NgxTypedJsModule,
    AutoCompleteModule,
   
   
    
 
  
    


 

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AdminInterceptor,multi:true},{provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent],
  // schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
