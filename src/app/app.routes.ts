import { Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path:"users", component:HomeComponent},
  {path:"servers", component:ServersComponent},
  {path:'', component:UsersComponent}];
