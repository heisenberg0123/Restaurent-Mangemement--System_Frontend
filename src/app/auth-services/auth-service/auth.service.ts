import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const url=["http://localhost:8085/"]
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  signup(signuprequest:any):Observable<any>{
    return  this.http.post<[]>(url+"api/auth/signup",signuprequest)

  }

  login(loginrequest:any):Observable<any>{
    return this.http.post<[]>(url+"api/auth/login",loginrequest);
  }
}
