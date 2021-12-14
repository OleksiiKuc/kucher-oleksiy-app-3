import { Component, Input, OnInit } from '@angular/core';
import { Dish } from 'src/shared/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
})
export class DishesComponent implements OnInit {
  @Input() dishes: Dish[] = [];

  constructor() {}

  ngOnInit() {
  }
}
