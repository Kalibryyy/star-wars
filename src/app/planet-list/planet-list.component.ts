import {Component, Input, OnInit} from '@angular/core';
import {Planet, PlanetsService} from "../planets.service";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  planets: Planet[] = [];
  any = 'any1';
  loading = false;

  constructor(private planetsService: PlanetsService) {}

  ngOnInit() {
    this.loading = true;
    this.planetsService.fetchPlanets()
      .subscribe((res: any) => {
        this.planets = res.results;
        this.loading = false;
      })
  }
}
