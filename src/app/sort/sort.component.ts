import { Component, OnInit } from '@angular/core';

import { MatTableDataSource, MatSort, Sort } from '@angular/material';
import { FOOD } from './mocks-data';


/**
 * @title Sorting overview
 */
@Component({
  selector: 'app-sort',
  templateUrl: 'sort.component.html',
  styleUrls: ['sort.component.css'],
})
export class SortComponent implements OnInit {
 food = FOOD;
 status = {best: 'Best', good: 'Good'};
 sortedData;

  constructor() {
    this.sortedData = this.food.slice();
  }
  ngOnInit() {
  }

  sortData(sort: Sort) {
    const data = this.food.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'calories': return compare(+a.calories, +b.calories, isAsc);
        case 'fat': return compare(+a.fat, +b.fat, isAsc);
        case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
        case 'protein': return compare(+a.protein, +b.protein, isAsc);
        default: return 0;
      }
    });
  }
}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
