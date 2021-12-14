import { Component } from '@angular/core';
import { Dish } from 'src/shared/dish';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kucher-oleksiy-app';
  dishes: Dish[] = [];
  filtredDishes: Dish[] = [];
  groups: any[] = [];

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();

    for (let i = 1; i < 1000; i++) {
      let dish = {
        id: i,
        name: 'Name ' + i,
        image: 'https://loremflickr.com/640/360',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        weight: i * 10,
        category: 'Category ' + (1 + Math.floor(Math.random() * 6)),
        price: i * 20,
      };
      this.dishes.push(dish);
    }

    this.groups = _(this.dishes)
      .groupBy((x) => x.category)
      .map((value, key) => ({ category: key, dishes: value }))
      .value();

    setTimeout(() => {
      this.filtredDishes = this.dishes;
      this.spinner.hide();
    }, 2000);
  }

  filterDishes(dishes: Dish[]) {
    this.spinner.show();

    setTimeout(() => {
      this.filtredDishes = dishes;
      this.spinner.hide();
    }, 1500);
  }
}
