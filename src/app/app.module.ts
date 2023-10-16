import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';
import { HomeComponent } from './home/home.component';
import { CategoriesService } from './service/categories.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { AppAfterLoginModule } from './app-after-login/app-after-login.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppAfterLoginModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ProductService, CategoriesService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
