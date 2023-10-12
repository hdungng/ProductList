import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddProductFormComponent } from './app-after-login/add-product-form/add-product-form.component';
import { ProductService } from './service/product.service';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './app-after-login/products/products.component';
import { CategoriesComponent } from './app-after-login/categories/categories.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriesService } from './service/categories.service';
import { LoginComponent } from './login/login.component';
import { AppAfterLoginComponent } from './app-after-login/app-after-login.component';
import { AuthService } from './service/auth.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: AppAfterLoginComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddProductFormComponent,
    ProductsComponent,
    CategoriesComponent,
    HomeComponent,
    LoginComponent,
    AppAfterLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ProductService, CategoriesService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
