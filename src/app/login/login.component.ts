import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('form') loginForm: NgForm;
  alertHost: PlaceholderDirective;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.isLoading = true;

    this.authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (responseData) => {
          if (
            responseData.hasOwnProperty('message') &&
            responseData.hasOwnProperty('code')
          ) {
            const message = responseData['message'];
            const code = responseData['code'];
            if (code != 200) {
              this.error = message;
              this.isLoading = false;
            } else {
              // redirect to page
              this.router.navigate(['/after-login/products']);
            }
          }
          console.log(responseData);
        },
        (error) => {
          this.error = error;
          this.isLoading = false;
        }
      );

    this.loginForm.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
