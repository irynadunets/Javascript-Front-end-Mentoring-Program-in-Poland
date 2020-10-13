import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'YouTube-client-app';
  public searchText: string;
  public filtrValue: string;
  public param1: string;
  public param2: string;
  public isShow: boolean = false;

  public onSearch($event: string): void {
    this.searchText = $event;
    this.isShow = true;
  }

  public onSort($event: string): void {
    this.filtrValue = $event;
  }

  public onSortDate($event: string): void {
    this.param1 = $event;
  }

  public onSortViews($event: string): void {
    this.param2 = $event;
  }

}
