import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";
import {Observable} from "rxjs";

@Component({
  standalone: true,
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: {id: number, name: string, status: string} | any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
      this.allowEdit = queryParams['allowEdit'] === '1';
      console.log(queryParams['allowEdit']);

    })
    this.route.fragment.subscribe()
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | boolean {
    if(!this.allowEdit){
      return true
    }

    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm("Are you sure you want to edit this server?");
    } else  {
      return true
    }

  }

}
