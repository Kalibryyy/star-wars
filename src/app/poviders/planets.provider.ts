import {InjectionToken, Provider} from "@angular/core";
import {PlanetsService} from "../services/planets.service";
import {Planet} from "../models/planet-model";
import {Observable} from "rxjs";

export const PLANETS: InjectionToken<Observable<Planet[]>> = new InjectionToken<Observable<Planet[]>>(
  'A stream with planets data'
);

export const ERROR: InjectionToken<Observable<string>> = new InjectionToken<Observable<string>>(
  'A stream with planets loading error'
);

export const LOADING: InjectionToken<Observable<boolean>> = new InjectionToken<Observable<boolean>>(
  'A stream with loading planets flag'
);

const planetsProvider: Provider = {
  provide: PLANETS,
  useFactory: (planetsService: PlanetsService) => planetsService.planets$,
  deps: [PlanetsService]
};

const errorProvider: Provider = {
  provide: ERROR,
  useFactory: (planetsService: PlanetsService) => planetsService.error$,
  deps: [PlanetsService]
}

const loadingProvider: Provider = {
  provide: LOADING,
  useFactory: (planetsService: PlanetsService) => planetsService.loading$,
  deps: [PlanetsService]
}

export {
  planetsProvider,
  errorProvider,
  loadingProvider,
}
