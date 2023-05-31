import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../Service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form!: FormGroup;
  submitted = false;

  invalidLogin!: boolean;
 hj :any =1;
  constructor( private formBuilder: FormBuilder,private router : Router,private toast: NgToastService ,private authService : AuthService) { }



  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
     
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ]
      },
      
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
  
    console.log(JSON.stringify(this.form.value, null, 2));

    let data = {
       "userEmail": this.form.value.email,
       "userPassword": this.form.value.password
    }


    let data11 = {
      "memberEmail": this.form.value.email,
      "memberPassword": this.form.value.password
   }

  
 
   this.authService.memberlogin(data11).subscribe((res : any ) => {
    //const token = (<any>res).token;
    //localStorage.setItem("jwt11",token);

    //localStorage.setItem(this.authService.tokenName,res.token);

    const token = (<any>res).token;
    localStorage.setItem("jwt",token);
    
    this.invalidLogin = false;
    this.toast.success({detail:"Success Message",summary:"Login Succesfull",duration:5000})
    console.log("Results :",res);
    this.router.navigateByUrl('home')
  }, (error : any) => {
    this.invalidLogin = true;
    this.toast.error({detail:"Error Message",summary:"Login Failed Please verify",duration:15000})
    console.log(error.error);
  })
   
   
   
}


}
