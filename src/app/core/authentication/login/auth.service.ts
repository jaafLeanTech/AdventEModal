import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse, Login } from '../../../models/login.model';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router'

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient, private router: Router) {
  }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  login(authData:Login): Observable<LoginResponse | void>{
    return this.http.post<LoginResponse>(`${environment.APILOGIN_URL}/Authentication`, authData)
    .pipe(
      map((res:LoginResponse) => {
        console.log('Res', res);
        this.saveToken(res.content.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  checkToken(): boolean {
    var userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken!);
    return isExpired;
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private handlerError(err: any): Observable<never>{
    let errorMessage = 'Any error ocurred retrieving data';
    if(err){
      errorMessage= `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
