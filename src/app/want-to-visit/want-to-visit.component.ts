import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.css']
})
export class WantToVisitComponent implements OnInit, OnChanges, DoCheck {
  @Input() wishPlanet: any;
  @Input() noMoreWishPlanet: any; //string?

  wishList: any[] = [];

  constructor() {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngDoCheck() {
    if (this.wishPlanet && !this.wishList.includes(this.wishPlanet)) {
      this.wishList.push(this.wishPlanet);
      this.wishPlanet = '';
      console.log('addPlanet ', this.wishList)
    } else if (this.noMoreWishPlanet) {
      this.wishList = this.wishList.filter(planet => planet !== this.noMoreWishPlanet)
      console.log('removePlanet ', this.wishList)
    }
    // console.log(this.wishList);
  }
}
