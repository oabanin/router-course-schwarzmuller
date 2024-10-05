import {CanActivateChild, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {ServersComponent} from "./servers/servers.component";
import {HomeComponent} from "./home/home.component";
import {UserComponent} from "./users/user/user.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {ServerComponent} from "./servers/server/server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./servers/server/server-resolver.service";

export const routes: Routes = [
  {path: "", component: HomeComponent},

  {path: 'users', component: UsersComponent, children: [{path: ':id/:name', component: UserComponent},]},

  {
    path: "servers", component: ServersComponent, canActivateChild: [AuthGuard], children: [
      {path: ":id", component: ServerComponent, resolve: {server: ServerResolver}},
      {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  },
  // {path: "page-not-found", component: PageNotFoundComponent},
  {path: "page-not-found", component: ErrorPageComponent, data: {message: 'Page Not Found'}},
  {path: "**", redirectTo: "page-not-found"}

];
