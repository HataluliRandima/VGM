import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 


//Mine added 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

  import { FilterPipeModule } from 'ngx-filter-pipe';

import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table'


import { JwtModule } from "@auth0/angular-jwt";



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';


export function tokenGetter()
{
  return localStorage.getItem("jwt");
}

//import { CommonModule } from '@angular/common';
  
 
//import { MatNativeDateModule } from '@angular/material/core';

import {MatExpansionModule} from '@angular/material/expansion';
import { MaterialExampleModule } from '../material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { Admin1Component } from './admin1/admin1.component';
import { Admin2Component } from './admin2/admin2.component';
import { TrackrequestComponent } from './trackrequest/trackrequest.component';
import { Test1Component } from './test1/test1.component';
import { Admin3Component } from './admin3/admin3.component';
import { Admin4Component } from './admin4/admin4.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
//import { QRCodeComponent } from 'angularx-qrcode';

import { QRCodeModule } from 'angularx-qrcode';
import { ModalComponent } from './modal/modal.component';
import { Modal2Component } from './modal2/modal2.component';
import { Modal3Component } from './modal3/modal3.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    TestComponent,
    Admin1Component,
    Admin2Component,
    TrackrequestComponent,
    Test1Component,
    Admin3Component,
    Admin4Component,
    TrackingComponent,
    ConfirmComponent,
    QrcodeComponent,
    ModalComponent,
    Modal2Component,
    Modal3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialExampleModule, 
    MatExpansionModule,
     ReactiveFormsModule,
     CommonModule,
     JwtModule,
     MatIconModule,
     MatButtonModule,
     MatFormFieldModule,
      NgToastModule,
     MatInputModule,
     ReactiveFormsModule,
     MatDialogModule,
     MatTableModule,
     HttpClientModule,
    FilterPipeModule  ,
    QRCodeModule,
     CommonModule,
    // NgbModule,
     BrowserAnimationsModule,
     JwtModule.forRoot({
      config:  {
      tokenGetter: tokenGetter,
      allowedDomains: ["localhost:7280"],
      disallowedRoutes: [""]
      
      //localhost:7271
      
      }
    })
      
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
