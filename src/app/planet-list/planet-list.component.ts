import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Planet, PlanetsService} from "../planets.service";

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

  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {
    this.loading = true;
    this.planetsService.fetchPlanets()
      .subscribe((res: any) => { //object?
        this.planets = res.results;
        this.loading = false;
      })
  }

  savePlanetToWishList(planet: any) {
    this.wishPlanet.emit(planet);
  }

  removePlanetFromWishList(planet: any) {
    this.noMoreWishPlanet.emit(planet);
  }
}
