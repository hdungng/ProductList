import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlertComponent, PaginationComponent],
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent],
})
export class SharedModule {}
