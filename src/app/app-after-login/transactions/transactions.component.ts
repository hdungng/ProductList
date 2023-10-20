import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/service/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  numsOfPages: number;
  currentPage: number = 1;

  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.currentPage = 1;
    this.getTransactions(this.currentPage);
  }

  getTransactions(pageNum) {
    this.transactionService.fetchTransactions(pageNum).subscribe(
      (trans) => {
        this.transactions = trans.transaction;
        this.numsOfPages = trans.meta.totalPages;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getTransactions(this.currentPage);
  }
}
