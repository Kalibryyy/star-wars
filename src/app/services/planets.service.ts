import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, throwError} from "rxjs";
import {Planet} from "../models/planet-model";
import {catchError, map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PlanetsService {

  error$ = new Subject();

  constructor(private readonly http: HttpClient) {
  }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<{ results: Planet[] }>('https://swapi.dev/api/planets1/')
      .pipe(
        map((planetList: { results: Planet[] }) => planetList.results),
        catchError(err => {
          this.error$.next(err);
          return throwError(err);
        })
      )
  }
}
