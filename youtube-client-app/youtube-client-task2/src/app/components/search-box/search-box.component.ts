import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public searchText: string;
  public isShow: boolean = false;

  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  @Output() public show: EventEmitter<boolean> = new EventEmitter< boolean>();

  constructor() { }

  public ngOnInit(): void { }

  public onSortShow(): void  {
    this.isShow = !this.isShow;
    this.show.emit(this.isShow);
  }

  public onSearch(): void  {
    this.search.emit(this.searchText);
  }
}
