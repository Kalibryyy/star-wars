import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.css']
})
export class WantToVisitComponent {
  private wishPlanetValue: any;
  private noMoreWishPlanetValue: any;
  wishList: any[] = [];

  @Input() set noMoreWishPlanet(noMoreWishPlanet: any) {
    this.noMoreWishPlanetValue = noMoreWishPlanet;
    console.log('setNoMoreWishPlanet', this.noMoreWishPlanetValue, this.wishList);
    if (this.noMoreWishPlanetValue) {
      this.wishList = this.wishList.filter(planet => {
        if (planet.includes(', ')) {
          planet = planet.slice(2)
        }
        return planet !== this.noMoreWishPlanetValue
      });
      console.log(this.wishList);
    }
    if (this.wishList.length && this.wishList[0].includes(', ')) {
      this.wishList[0] = this.wishList[0].slice(2)
    }
  }

  @Input() set wishPlanet(wishPlanet: string) {
    this.wishPlanetValue = wishPlanet
    console.log('setWishPlanet', this.wishPlanetValue, this.wishList);
    if (this.wishPlanetValue && !this.wishList.includes(this.wishPlanetValue)) {
      if (this.wishList.length) {
        this.wishPlanetValue = ', ' + this.wishPlanetValue;
      }
      this.wishList.push(this.wishPlanetValue);
      this.wishPlanetValue = '';
    }
  };
}
