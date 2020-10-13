import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from '../../services/items-service';
import { IVideoItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  providers: [ItemsService]
})

export class SearchResultComponent implements OnInit {
  @Input() public searchText: string;
  @Input() public filtrValue: string;
  @Input() public param1: string;
  @Input() public param2: string;
  public items: IVideoItem[];

  constructor(private itemsService: ItemsService) { }

  public ngOnInit(): void {
    this.items = this.itemsService.items;
  }

}
