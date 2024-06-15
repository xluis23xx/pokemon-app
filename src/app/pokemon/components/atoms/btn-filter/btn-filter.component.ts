import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-filter',
  templateUrl: './btn-filter.component.html',
  styleUrls: ['./btn-filter.component.scss']
})
export class BtnFilterComponent {
  isActiveAll: boolean = true;
  isActiveFavourite: boolean = false;

  filterAll(): void {
    console.log('filterAll');
    this.isActiveFavourite = false;
    this.isActiveAll = true;
  }

  filterFavourite(): void {
    console.log('filterFavourite');
    this.isActiveFavourite = true;
    this.isActiveAll = false;
  }
}
