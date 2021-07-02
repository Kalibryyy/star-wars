import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {PlanetsService} from "../services/planets.service";

@Injectable({ providedIn: "root" })
export class PlanetsResolver implements Resolve<unknown> {
  constructor(private planetsService: PlanetsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    this.planetsService.fetchPlanets();
    return of(null);
  }
}
