import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {Planet} from "../../models/planet-model";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  @Output() wishPlanet: EventEmitter<string> = new EventEmitter<string>();
  @Output() noMoreWishPlanet: EventEmitter<string> = new EventEmitter<string>();

  planets: Planet[] = [];
  loading = false;
  errorMessage = '';
  // error$: any;
  // planets$: any;

  constructor(private readonly planetsService: PlanetsService) {
  }

  ngOnInit() {
    this.loading = true;
    // this.error$ = this.planetsService.error$;
    // console.log(this.error$)
    // this.planets$ = this.planetsService.getPlanets();
    this.planetsService.getPlanets()
      .pipe(
        catchError(err => {
          if (err.status === 404) {
            this.errorMessage = 'Запрашиваемый ресурс не найден'
          } else {
            this.errorMessage = err.message;
          }
          return throwError(err); // ?
        })
      )
      .subscribe((planets: Planet[]) => {
          this.planets = planets;
        },
      )
    this.loading = false;
  }

  savePlanetToWishList(planet: any) {
    this.wishPlanet.emit(planet);
  }

  removePlanetFromWishList(planet: any) {
    this.noMoreWishPlanet.emit(planet);
  }
}
