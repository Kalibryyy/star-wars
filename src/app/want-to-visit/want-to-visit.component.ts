import { Component, OnInit } from '@angular/core';
import {Planet} from "../planets.service";

@Component({
  selector: 'app-want-to-visit',
  templateUrl: './want-to-visit.component.html',
  styleUrls: ['./want-to-visit.component.css']
})
export class WantToVisitComponent implements OnInit {

  wishList: Planet[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
