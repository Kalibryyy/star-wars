import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Planet} from "../planets.service";

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.css']
})
export class PlanetListItemComponent implements OnInit {
  @Input() planet: any; // Planet?
  @Output() onSavePlanet: EventEmitter<any> = new EventEmitter<any>()
  @Output() onUnSavePlanet: EventEmitter<any> = new EventEmitter<any>()

  isPlanetInWishList = false;

  buttonText = {
    save: 'Хочу посетить',
    unsave: `В списке`
  }

  constructor() { }

  ngOnInit(): void {

  }

  toggleWishList(planet: string) {
    this.isPlanetInWishList = !this.isPlanetInWishList;
    if (this.isPlanetInWishList) {
      this.onSavePlanet.emit(planet);
    } else {
      this.onUnSavePlanet.emit(planet);
    }
  }
}
