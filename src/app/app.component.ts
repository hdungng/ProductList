import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      // this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
