import { Injectable } from '@angular/core';

 
//import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
//import { UserInfo } from '../user';
import { Observable } from 'rxjs';
import { Book } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly tokenName : string = "token";
  constructor(private http: HttpClient,private router: Router) { }


  //Login for member 
  memberlogin (data: any)
  {
    return this.http.post(`${environment.apiUrl}/Members/memberlogin`,data);
  }

  MemberRegister (data: any)
  {
    return this.http.post(`${environment.apiUrl}/Members/memberregister`,data);
  }

  //borrow book by a member
  addborrow(data : any)
  {
     return this.http.post(`${environment.apiUrl}/Borrow/borrowbook`, data)
  }

  //get all book numbers
  getallbooks()
  {
    return this.http.get<Book[]>(`${environment.apiUrl}/Books/allbooks`)
  }

   //get all book numbers
   getallbooksnumber()
   {
     return this.http.get(`${environment.apiUrl}/Books/bookgnumbers`)
   }

   //]
   currentuser()
   {
     return this.http.get(`${environment.apiUrl}/Members/member/current`)
   }



   //getallborrowsby a member 
   getallborrowbymember()
   {
    return this.http.get(`${environment.apiUrl}/Borrow/getborrowbymember`)
   }

   //get book details using Id
   getbookinformation(data : any)
   {
        return this.http.get(`${environment.apiUrl}/Books/getbook/`+ data)
   }

  IsLogged() {
    return localStorage.getItem("token") != null;
  }
  GetToken() {
    return localStorage.getItem("jwt") || '';
  }
    isLoggedIn = true;
  isAuthenticated(){
    
    return this.isLoggedIn;
  }
  Logout() {
    alert('Your session expired')
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
