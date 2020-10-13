import { AfterViewInit, Component, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  private subscription: Subscription;
  public isShow: boolean = false;

  @Output() public search: EventEmitter<string> = new EventEmitter<string>();
  @Output() public show: EventEmitter<boolean> = new EventEmitter< boolean>();

  constructor() { }

  public ngOnInit(): void { }

  public ngAfterViewInit(): void {
    const terms$: Observable<any> = fromEvent<any>(document.getElementById('input-search'), 'keyup')
      .pipe(
        map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
        filter(searchTerm => searchTerm.length > 2),
        debounceTime(1000),
        distinctUntilChanged()
      );

    this.subscription = terms$
      .subscribe(
        criterion => {
          this.search.emit(criterion);
        }
      );
   }

   public ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }

  public onSortShow(): void {
    this.isShow = !this.isShow;
    this.show.emit(this.isShow);
  }
}
