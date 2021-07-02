import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.css']
})
export class PlanetListItemComponent implements OnInit {
  @Input() planet: any; // ?
  @Output() onSavePlanet: EventEmitter<any> = new EventEmitter<any>()
  @Output() onUnSavePlanet: EventEmitter<any> = new EventEmitter<any>()

  isPlanetInWishList = false;

  buttonText = {
    save: 'Хочу посетить',
    unsave: `В списке`
  }

  ngOnInit(): void {
    console.log(this.planet)
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
