import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {Planet} from "../../models/planet-model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  @Output() wishPlanet: EventEmitter<string> = new EventEmitter<string>();
  @Output() noMoreWishPlanet: EventEmitter<string> = new EventEmitter<string>();

  error$: Observable<string>;
  planets$: Observable<Planet[]>;
  loading$: Observable<boolean>;

  constructor(
    private readonly planetsService: PlanetsService,
  ) {
    this.error$ = this.planetsService.error$;
    this.planets$ = this.planetsService.planets$;
    this.loading$ = this.planetsService.loading$;
  }

  ngOnInit() {}

  savePlanetToWishList(planet: string): void {
    this.wishPlanet.emit(planet);
  }

  removePlanetFromWishList(planet: string): void {
    this.noMoreWishPlanet.emit(planet);
  }
}
