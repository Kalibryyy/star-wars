import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, of, Subject} from "rxjs";
import {Planet} from "../models/planet-model";
import {catchError, first, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class PlanetsService {

  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  error$: Subject<string> = new Subject<string>();
  planets$: BehaviorSubject<Planet[]> = new BehaviorSubject<Planet[]>([]);

  constructor(
    private readonly http: HttpClient
  ) {
    this.fetchPlanets();
  }

  fetchPlanets(): void {
    this.http.get<{ results: Planet[] }>(`${environment.swapiServiceURL}/planets`).pipe(
      first(),
      tap((planetList: { results: Planet[] }) => {
        this.planets$.next(planetList.results);
        console.log(this.planets$);
        this.loading$.next(false);
        console.log(this.loading$);
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          this.error$.next('Запрашиваемый ресурс не найден')
        } else {
          this.error$.next(err.message);
        }
        this.loading$.next(false);
        return of(err);
      }),
    ).subscribe();
  }
}
