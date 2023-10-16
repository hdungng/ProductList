import { NgModule } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppAfterLoginComponent } from './app-after-login.component';
import { AuthGuard } from '../auth/auth.guard';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AddProductFormComponent,
    ProductsComponent,
    CategoriesComponent,
    AppAfterLoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: 'after-login',
        component: AppAfterLoginComponent,
        // canActivate: [AuthGuard],
        children: [
          { path: 'products', component: ProductsComponent },
          { path: 'categories', component: CategoriesComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppAfterLoginModule {}
