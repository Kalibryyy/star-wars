import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlanetsService} from "../../services/planets.service";
import {Planet} from "../../models/planet-model";

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
  errorMessage: any;

  constructor(private readonly planetsService: PlanetsService) {
  }

  ngOnInit() {
    this.loading = true;
    this.planetsService.getPlanets()
      .subscribe((planets: Planet[]) => {
          this.planets = planets;
          this.errorMessage = this.planetsService.error$;
        console.log(this.planetsService.error$)
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
