import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [RouterLink],
})
export class UserComponent implements OnInit, OnDestroy{
  user: {id: number, name: string} | any;
  paramsSubscription!: Subscription; // Use definite assignment assertion


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    }
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    })
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe()
  }

}
