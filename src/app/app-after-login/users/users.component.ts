import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  numsOfPages: number;
  currentPage: number = 1;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.currentPage = 1;
    this.getUsers(this.currentPage);
  }

  getUsers(pageNum) {
    console.log(pageNum);
    this.usersService.fetchUsers(pageNum).subscribe(
      (userRes) => {
        this.users = userRes.user;
        this.numsOfPages = userRes.meta.totalPages;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getUsers(this.currentPage);
  }
}
