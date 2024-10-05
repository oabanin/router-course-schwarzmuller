import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string } | any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.server = data['server'];
    });


    // const id: string = this.route.snapshot.params['id'];
    // if (id) {
    //   this.server = this.serversService.getServer(+id);
    // }
    //
    // this.route.params.subscribe(params => {
    //   const id: string = this.route.snapshot.params['id'];
    //   if (id) {
    //     this.server = this.serversService.getServer(+id);
    //   }
    // })

  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve"});
  }

}
