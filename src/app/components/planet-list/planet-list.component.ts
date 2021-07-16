import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {Planet} from "../../models/planet-model";
import {Observable} from "rxjs";
import {
  ERROR,
  errorProvider,
  LOADING,
  loadingProvider,
  PLANETS,
  planetsProvider
} from "../../poviders/planets.provider";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css'],
  providers: [
    planetsProvider,
    errorProvider,
    loadingProvider
  ]
})

export class PlanetListComponent {
  // @Output() wishPlanet: EventEmitter<string> = new EventEmitter<string>();
  // @Output() noMoreWishPlanet: EventEmitter<string> = new EventEmitter<string>();

  // error$: Observable<string>;
  // planets$: Observable<Planet[]>;
  // loading$: Observable<boolean>;

  constructor(
    // private readonly planetsService: PlanetsService,
    @Inject(PLANETS) public readonly planets$: Observable<Planet[]>,
    @Inject(ERROR) public readonly error$: Observable<string>,
    @Inject(LOADING) public readonly loading$: Observable<boolean>,
  ) {
    // this.error$ = this.planetsService.error$;
    // this.planets$ = this.planetsService.planets$;
    // this.loading$ = this.planetsService.loading$;
  }

  // savePlanetToWishList(planet: string): void {
  //   this.wishPlanet.emit(planet);
  // }
  //
  // removePlanetFromWishList(planet: string): void {
  //   this.noMoreWishPlanet.emit(planet);
  // }
}
