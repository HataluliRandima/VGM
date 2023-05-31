import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
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
import { ModalComponent } from './modal/modal.component';
import { Modal2Component } from './modal2/modal2.component';
import { Modal3Component } from './modal3/modal3.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'test1',
    component: Test1Component
  },
  {
    path: 'admin1',
    component: Admin1Component
  },
  {
    path: 'admin2',
    component: Admin2Component
  },
  {
    path: 'admin3',
    component: Admin3Component
  },
  {
    path: 'admin4',
    component: Admin4Component
  },
  {
    path: 'track',
    component: TrackrequestComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'tr',
    component: TrackingComponent
  },
  {
    path: 'home/confirm/:id',
    component: ConfirmComponent
  },
  {
    path: 'code',
    component: QrcodeComponent
  },
  {
    path:'modal',
    component: ModalComponent
  },
  {
    path:'modal2',
    component: Modal2Component
  },
  {
    path:'modal3',
    component: Modal3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
