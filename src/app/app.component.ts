import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {ServersService} from "./servers/servers.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, UsersComponent, ServersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ServersService]
})
export class AppComponent {
  title = 'angular-schwarzmuller-router';
}
