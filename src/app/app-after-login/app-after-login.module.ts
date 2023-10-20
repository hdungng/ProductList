import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppAfterLoginComponent } from './app-after-login.component';
import { AuthGuard } from '../auth/auth.guard';
import { UsersComponent } from './users/users.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AppAfterLoginComponent, UsersComponent, TransactionsComponent],
  imports: [
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppAfterLoginComponent,
        canActivate: [AuthGuard],
        children: [
          { path: 'users', component: UsersComponent },
          {
            path: 'transactions',
            component: TransactionsComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppAfterLoginModule {}
