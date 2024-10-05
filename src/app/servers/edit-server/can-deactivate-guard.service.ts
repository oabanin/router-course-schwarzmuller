import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

export interface CanComponentDeactivate {
  canDeactivate: () => MaybeAsync<GuardResult>;
}

@Injectable({
  providedIn: 'root', // Ensures the guard is provided at the root level
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return component.canDeactivate()
  }
}
