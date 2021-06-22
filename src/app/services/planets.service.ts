import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, of, Subject, throwError} from "rxjs";
import {Planet} from "../models/planet-model";
import {catchError, map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class PlanetsService {

  error$: Subject<HttpErrorResponse> = new Subject<HttpErrorResponse>();

  constructor(private readonly http: HttpClient) {
  }

  // getPlanets(): Observable<Planet[]> {
  //   return this.http.get<{ results: Planet[] }>('https://swapi.dev/api/planets1/')
  //     .pipe(
  //       map((planetList: { results: Planet[] }) => planetList.results),
  //     )
  // }

  getPlanets(): Observable<Planet[] | HttpErrorResponse>  {
    return this.http.get<{ results: Planet[] }>('https://swapi.dev/api/planets1/')
      .pipe(
        map((planetList: { results: Planet[] }) => planetList.results),
        catchError((err: HttpErrorResponse) => {
          this.error$.next(err);
          return of(err);
        })
      );
  }
}
