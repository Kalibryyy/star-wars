import {Component} from '@angular/core';
import {VisitService} from "../../services/visit.service";

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.css']
})
export class WantToVisitComponent {
  // app-want-to-visit имеет одно входящее свойство planetNames и берет состояние из VisitService
  // либо управляет состоянием через внедрение VisitService.
  constructor(public visitService: VisitService) {}
  // private wishPlanetValue: string; //?
  // private noMoreWishPlanetValue: string; //?
  // wishList: string[] = [];

  // @Input() set noMoreWishPlanet(noMoreWishPlanet: any) {
  //   this.noMoreWishPlanetValue = noMoreWishPlanet;
  //   console.log('setNoMoreWishPlanet', this.noMoreWishPlanetValue, this.wishList);
  //   if (this.noMoreWishPlanetValue) {
  //     this.wishList = this.wishList.filter(planet => {
  //       if (planet.includes(', ')) {
  //         planet = planet.slice(2)
  //       }
  //       return planet !== this.noMoreWishPlanetValue
  //     });
  //     console.log(this.wishList);
  //   }
  //   if (this.wishList.length && this.wishList[0].includes(', ')) {
  //     this.wishList[0] = this.wishList[0].slice(2)
  //   }
  // }
  //
  // @Input() set wishPlanet(wishPlanet: string) {
  //   this.wishPlanetValue = wishPlanet
  //   console.log('setWishPlanet', this.wishPlanetValue, this.wishList);
  //   if (this.wishPlanetValue && !this.wishList.includes(this.wishPlanetValue)) {
  //     if (this.wishList.length) {
  //       this.wishPlanetValue = ', ' + this.wishPlanetValue;
  //     }
  //     this.wishList.push(this.wishPlanetValue);
  //     this.wishPlanetValue = '';
  //   }
  // };
}
