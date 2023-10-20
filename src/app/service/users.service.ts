import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  fetchUsers(currentPage) {
    let user = JSON.parse(localStorage.getItem('userData'));
    let skip = Math.ceil((currentPage - 1) * 5);

    let headers = new HttpHeaders({ user_token: user.user_token });

    return this.http
      .get(`http://10.0.0.141:8052/api/User/GetUsers?skip=${skip}&take=5`, {
        headers,
      })
      .pipe(
        catchError((err) => {
          if (err.status === 401) {
            this.authService.logout();
            err = 'Login token has expired';
          }
          return throwError(err);
        }),
        map((userRes: any) => {
          return userRes.data;
        })
      );
  }
}
