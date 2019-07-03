import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Restaurant
  public teste: string = "1"

  constructor() { }

  ngOnInit() {
  }

}