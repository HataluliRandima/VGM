import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  
  brw : any;

  mercs : any;

constructor(private authService : AuthService){}

  ngOnInit(): void {
   this.authService.getallborrowbymember().subscribe((res: any) => {
    this.brw = res;
       console.log("Borrows :", res);
     });
  }

}
