import {Component, Input, OnInit} from '@angular/core';
import {Planet} from "../planets.service";

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.css']
})
export class PlanetListItemComponent implements OnInit {
  @Input() planet: any; // Planet?

  isPlanetInWishList = false;

  buttonText = {
    save: 'Хочу посетить',
    unsave: `В списке`
  }

  constructor() { }

  ngOnInit(): void {

  }

  toggleWishList() {
    this.isPlanetInWishList = !this.isPlanetInWishList;
  }
}
