import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {UserComponent} from "./user/user.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  imports: [
    NgForOf,
    UserComponent,
    RouterLink,
    RouterOutlet
  ],
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
}
