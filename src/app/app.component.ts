import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wishPlanet: string = '';
  noMoreWishPlanet: string = '';

  savePlanetToWishList(planet: string) {
    this.wishPlanet = planet;
  }

  removePlanetFromWishList(planet: string) {
    this.noMoreWishPlanet = planet;
  }
}
