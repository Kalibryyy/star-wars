import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wishPlanet: string = '';
  noMoreWishPlanet: string = '';

  savePlanetToWishList(planet: string): void {
    this.wishPlanet = planet;
  }

  removePlanetFromWishList(planet: string): void {
    this.noMoreWishPlanet = planet;
  }
}
