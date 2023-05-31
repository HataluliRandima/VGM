import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  showDetails = false;
  @Input() addressType!: string  ;
  place!: object;
  @ViewChild('addresstext') addresstext: any;
  
  establishmentAddress!: Object;

  formattedAddress!: string ;
  formattedEstablishmentAddress!: string;

  addressForm!: FormGroup;
   


  form!: FormGroup;
  submitted = false;
 

  constructor(private formBuilder: FormBuilder,private router: Router,private authService:AuthService) { }

  ngOnInit(): void {
 
     
    this.form = this.formBuilder.group(
      {
       
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        Surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contact: ['',[Validators.required,Validators.minLength(10)]],
        address: ['',Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', 
        [Validators.required,
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
  onSubmit(): void {
   
  }


  reg()
  {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    let data = {
      
      "memberName":this.form.value.username ,
      "memberSurname": this.form.value.Surname,
      "memberEmail": this.form.value.email,
      "memberContactDetails": this.form.value.contact ,
      "memberAddress": this.form.value.address ,
      "memberPassword": this.form.value.password
     
  }
    this.authService.MemberRegister(data).subscribe((res : any) => {
      console.log("Results :",res);
   this.router.navigateByUrl('login');
    }, (error : any) => {
      console.log(error.error);
    }
    )

  }
  


   


 

 
}
