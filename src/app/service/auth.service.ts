import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    this.http
      .post('http://10.0.0.141:8052/api/auth/user-login', {
        username,
        password,
      })
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }
}
