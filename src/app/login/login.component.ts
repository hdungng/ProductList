import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('form') loginForm: NgForm;

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    this.loginForm.reset();
  }
}
