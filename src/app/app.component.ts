import { Component, VERSION } from '@angular/core';

import { MatTableDataSource, MatSort, Sort } from '@angular/material';

/**
 * @title Sorting overview
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Angular Material sort API';
  version: string = VERSION.full;
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
