import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  fetchTransactions(currentPage) {
    let user = JSON.parse(localStorage.getItem('userData'));
    let skip = Math.ceil((currentPage - 1) * 20);

    let headers = new HttpHeaders({ user_token: user.user_token });

    return this.http
      .get(
        `http://10.0.0.141:8052/api/transaction/get-transactions?skip=${skip}&take=20`,
        { headers }
      )
      .pipe(
        catchError((err) => {
          if (err.status === 401) {
            this.authService.logout();
            err = 'Login token has expired';
          }
          return throwError(err);
        }),
        map((transactionRes: any) => {
          return transactionRes.data;
        })
      );
  }
}
