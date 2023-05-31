import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  brw : any;

  mercs : any;

constructor(private authService : AuthService){}

  ngOnInit(): void {
   this.authService.getallborrowbymember().subscribe((res: any) => {
    this.brw = res;
       console.log("khezwi :", res);
     });
  }
  
  now()
  {
    console.log("edzisa");
  }

}
