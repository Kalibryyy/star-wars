import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Planet {
  name: string
  diameter: number
  population: number
}

@Injectable({providedIn: 'root'})
export class PlanetsService {
  constructor(private http: HttpClient) {
  }

  fetchPlanets(): Observable<any> {
    return this.http.get('https://swapi.dev/api/planets/')
  }
}
