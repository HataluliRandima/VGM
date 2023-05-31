import { Component ,OnInit} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {


  message ='';

  mercs : any;
  aee : any;


  constructor(private jwtHelper: JwtHelperService,private authService : AuthService) { }

  ngOnInit(): void {
    const token = localStorage.getItem("jwt");
    this.authService.currentuser().subscribe(
      (res : any) => {
        // this.message = `Welcome ${res.userName}`;
        this.aee = res.memberName;
        console.log("Results :",res);
        console.log("Results :" ,this.aee);
      } , (error : any) => {
         this.message = 'you are not log in';
        console.log(error.error);
        console.log("Results :");
      }
     )
     
  }
  isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("jwt");

    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    return false;
  }

  logOut = () => {
    localStorage.removeItem("jwt");
    alert('Your session expired');
    localStorage.clear();
  }

}
