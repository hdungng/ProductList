import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent],
})
export class SharedModule {}
