import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServersService} from "../servers/servers.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id:number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams:{allowEdit:1}, fragment:"hash"});
  }

  onLogin(){
    this.authService.logIn()
  }

  onLogout(){
    this.authService.logOut()
  }
}
