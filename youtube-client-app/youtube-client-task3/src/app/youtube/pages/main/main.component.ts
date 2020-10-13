import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public searchText: string;
  public filtrValue: string;
  public param1: string;
  public param2: string;
  public isShow: boolean = false;

  constructor() { }

  public ngOnInit(): void { }

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
