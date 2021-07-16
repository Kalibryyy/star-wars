import {Component, EventEmitter, Input, Output} from '@angular/core';
import {VisitService} from "../../services/visit.service";

@Component({
  selector: 'app-planet-list-item',
  templateUrl: './planet-list-item.component.html',
  styleUrls: ['./planet-list-item.component.css']
})
export class PlanetListItemComponent {
  @Input() planet: any; // Planet?
  // @Output() onSavePlanet: EventEmitter<any> = new EventEmitter<any>()
  // @Output() onUnSavePlanet: EventEmitter<any> = new EventEmitter<any>()

  // isSaved: boolean;

  buttonText = {
    save: 'Хочу посетить',
    unsave: `В списке`
  }

  constructor(public visitService: VisitService) {
    console.log(this.planet)
    // this.isSaved = !(!visitService.planetNames.includes(this.planet.name) || visitService.planetNames.includes(', ' + this.planet.name));
  }
}
