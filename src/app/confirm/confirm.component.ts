import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { NgToastService } from 'ng-angular-popup';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  //START HERE 

  disName = false;
  Employeeid: any;
 nn :any;
  mers:any;
  merr:any;
  mercs:any;
  merch:any;
  idtimeRecord! :number;
  status="d";
  tt:any;
  addUserForm!:FormGroup;


  aa:any;
  bb:any;
  cc:any;

   constructor(private route: ActivatedRoute, private authservice : AuthService,private formBuilder: FormBuilder,private toast: NgToastService , private router : Router){}
 


  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group(
      {
        datestart: ['', [Validators.required]],
        dateend: ['', [Validators.required]],
       
      });
    this.route.params.subscribe(params =>{
      this.idtimeRecord = +params['id'];
      console.log("Show ID  :",this.idtimeRecord);
    });
  
      //this.idtimeRecord = this.route.snapshot.paramMap.get('id');
      this.Employeeid = this.route.snapshot.paramMap.get('id');
      if (this.Employeeid != null && this.Employeeid != 0)
       {
           this.getbookinfo(this.Employeeid);
       }
      
  }

  getbookinfo(data:any)
  {
    this.authservice.getbookinformation(data).subscribe((res:any) =>
    {
     this.aa = res.bookAuthor;
     this.bb = res.bookTitle;
       
      console.log("Information  :",res);
     
    }, (error : any) => {
      
      console.log(error.error);
    }
    
    
    );
  }


  opensweet()
  {
    Swal.fire({
      title: 'Do you want to Send the Request?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Send',
      denyButtonText: `Don't send`,
    }).then((result: { isConfirmed: any; isDenied: any; }) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
         
        let data = {
          
          "borrowDate": this.addUserForm.value.datestart,
          "borrowReturnDate": this.addUserForm.value.dateend,
           "bookId" :  this.Employeeid
        }
         console.log("Ezwi: ",data);
        //this.useer = this.addUserForm.value;
         this.authservice.addborrow(data).subscribe((res : any) => {

          console.log("Results :",res);

          this.toast.success({detail:"Success Message",summary:"Request Sent Succesfull",duration:15000})
          Swal.fire('Requent Sent!', '', 'success')
          this.router.navigateByUrl('home')
       //this.router.navigateByUrl('home');
        }, (error : any) => {
          console.log(error.error);
        }
        )
      
       // this.toast.success({detail:"Success Message",summary:"Saved info Succesfull",duration:5000})
      


      } else if (result.isDenied) {
        Swal.fire('Request is Denied', '', 'info')
      }
    })

  }
  
}
