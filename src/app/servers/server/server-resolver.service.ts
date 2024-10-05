import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, MaybeAsync, Router} from '@angular/router';
import {ServersService} from "../servers.service";
import {Injectable} from "@angular/core";
interface Server { id: number; name: string; status: string }

@Injectable({
  providedIn: 'root', // Ensures the guard is provided at the root level
})
export class ServerResolver implements Resolve<Server> {

  constructor(private serviceServers: ServersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Server> {
    return this.serviceServers.getServer(+route.params['id']) as Server
  }
}
