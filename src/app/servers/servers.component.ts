import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {NgForOf} from "@angular/common";
import {EditServerComponent} from "./edit-server/edit-server.component";
import {ServerComponent} from "./server/server.component";

@Component({
  selector: 'app-servers',
  standalone: true,
  templateUrl: './servers.component.html',
  imports: [
    NgForOf,
    EditServerComponent,
    ServerComponent
  ],
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

}
