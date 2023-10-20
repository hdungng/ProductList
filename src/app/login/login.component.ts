import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('form') loginForm: NgForm;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.isLoading = true;

    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (responseData: any) => {
          if (
            responseData.hasOwnProperty('message') &&
            responseData.hasOwnProperty('code')
          ) {
            if (responseData.code != 200) {
              console.log(responseData);
              this.error = responseData.message;
              this.isLoading = false;
            } else {
              // redirect to page
              const userData = responseData.data.staff;

              this.authService.user.next(userData);
              localStorage.setItem('userData', JSON.stringify(userData));
              this.router.navigate(['/after-login/users']);
            }
          }
        },
        (error) => {
          this.error = error;
          this.isLoading = false;
        }
      );

    this.loginForm.reset();
  }
}
