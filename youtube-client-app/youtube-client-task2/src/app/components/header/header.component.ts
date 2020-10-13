import { Component, Input, Output, EventEmitter, ViewChild , OnInit} from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchText: string;
  public filtrValue: string;
  public param1: string;
  public param2: string;
  public isShow: boolean = false;

  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sortw: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sortd: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sortv: EventEmitter<string> = new EventEmitter<string>();

 public ngOnInit(): void { }

  public onSearch($event: string): void {
    this.searchText = $event;
    this.search.emit(this.searchText);
  }

  public onSortShow($event: boolean): void {
    this.isShow = $event;
  }

  public onSort($event: string): void {
    this.filtrValue = $event;
    this.sortw.emit(this.filtrValue);
  }

  public onDate($event: string): void {
    this.param1 = $event;
    this.sortd.emit(this.param1);
  }

  public onViews($event: string): void {
    this.param2 = $event;
    this.sortv.emit(this.param2);
  }

}
