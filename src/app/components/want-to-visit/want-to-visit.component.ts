import {Component, DoCheck, Input} from '@angular/core';

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.css']
})
export class WantToVisitComponent implements DoCheck {
  @Input() wishPlanet: any;//string?
  @Input() noMoreWishPlanet: any; //string?

  wishList: any[] = [];

  ngDoCheck() {
    if (this.wishPlanet && !this.wishList.includes(this.wishPlanet)) {
      if (this.wishList.length) {
        this.wishPlanet = ', ' + this.wishPlanet;
      }
      this.wishList.push(this.wishPlanet);
      this.wishPlanet = '';
    } else if (this.noMoreWishPlanet) {
      this.wishList = this.wishList.filter(planet => {
        if (planet.includes(', ')) {
          planet = planet.slice(2)
        }
        return planet !== this.noMoreWishPlanet
      });
    }
    if (this.wishList.length && this.wishList[0].includes(', ')) {
      this.wishList[0] = this.wishList[0].slice(2)
    }
  }
}
