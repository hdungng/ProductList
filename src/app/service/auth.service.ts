import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, throwError } from 'rxjs';
import { UserResponse } from '../models/user-request.response';
import { AuthUser } from '../models/authUser.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<AuthUser>(null);
  error = new Subject<string>();

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http
      .post<UserResponse>('http://10.0.0.141:8052/api/auth/user-login', {
        username,
        password,
      })
      .pipe(catchError(this.handleError));
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new AuthUser(
      userData.avatar,
      userData.fullName,
      userData.mobile_number,
      userData.user_token,
      userData.user_type
    );

    if (loadedUser.user_token) {
      this.user.next(loadedUser);
    }
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }

  private handleError(errorRes: HttpErrorResponse | any) {
    let errorMessage = errorRes.message;

    if (errorRes.status === 400) {
      errorMessage = 'Please enter a valid username and password!';
    }

    return throwError(errorMessage);
  }
}
