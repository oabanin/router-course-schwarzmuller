import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

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
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string} | any;
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
      this.allowEdit = queryParams['allowEdit'] === '1';
      console.log(queryParams['allowEdit']);

    })
    this.route.fragment.subscribe()
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
