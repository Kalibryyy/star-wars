import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {Planet} from "../../models/planet-model";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  @Output() wishPlanet: EventEmitter<string> = new EventEmitter<string>();
  @Output() noMoreWishPlanet: EventEmitter<string> = new EventEmitter<string>();

  // error = '';
  error$: Observable<string>;
  planets$: Observable<Planet[]>;
  loading$: Observable<boolean>;

  constructor(
    private readonly planetsService: PlanetsService
  ) {
    this.error$ = this.planetsService.error$;
    this.planets$ = this.planetsService.planets$;
    this.loading$ = this.planetsService.loading$;
    console.log(this.loading$)
    // this.planets$ = this.planetsService.getPlanets().pipe(
    //   catchError((err: HttpErrorResponse) => {
    //     this.error = err.message;
    //     return throwError(err);
    //   })
    // )
  }

  ngOnInit() {

    // this.error$ = this.planetsService.error$;
    // console.log(this.error$)
    // this.planets$ = this.planetsService.getPlanets();
    // this.planetsService.getPlanets()
      // .pipe(
      //   catchError(err => {
      //     if (err.status === 404) {
      //       this.errorMessage = 'Запрашиваемый ресурс не найден'
      //     } else {
      //       this.errorMessage = err.message;
      //     }
      //     return throwError(err); // ?
      //   })
      // )
      // .subscribe((planets: Planet[]) => {
      //     this.planets = planets;
      //   },
      // )
  }

  savePlanetToWishList(planet: any) {
    this.wishPlanet.emit(planet);
  }

  removePlanetFromWishList(planet: any) {
    this.noMoreWishPlanet.emit(planet);
  }
}
