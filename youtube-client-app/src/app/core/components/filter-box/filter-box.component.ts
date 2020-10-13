import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss']
})
export class FilterBoxComponent implements OnInit {
  public filtrValue: string;
  public isDateSort: boolean = false;
  public isViewsSort: boolean = false;

  @Output() public sortd: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sortv: EventEmitter<string> = new EventEmitter<string>();
  @Output() public sortw: EventEmitter<string>  = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {  }

  public sortDate(param: string): void {
    this.isDateSort ? this.sortd.emit('dateDec') : this.sortd.emit('dateInc');
    this.isDateSort = !this.isDateSort;
  }

  public sortViews(param: string): void {
    this.isViewsSort ? this.sortv.emit('viewDec') : this.sortv.emit('viewInc');
    this.isViewsSort = !this.isViewsSort;
  }

  public onSort(): void {
    this.sortw.emit(this.filtrValue);
  }

}
