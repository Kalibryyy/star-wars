import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class VisitService {
  planetNames: string[] = [];
  planetName: string;

  savePlanetToWishList(planet: string) {
    this.planetName = planet;
    if (!this.planetNames.includes(this.planetName)) {
      if (this.planetNames.length) {
        this.planetName = ', ' + this.planetName
      }
      this.planetNames.push(this.planetName);
      this.planetName = '';
    }
    console.log(this.planetNames)
  }

  removePlanetFromWishList(planet: string) {
    this.planetNames = this.planetNames.filter(planetName => {
      if (planetName.includes(', ')) {
        planetName = planetName.slice(2)
      }
      return planetName !== planet;
    });
    if (this.planetNames.length && this.planetNames[0].includes(', ')) {
      this.planetNames[0] = this.planetNames[0].slice(2);
    };
  }
}

