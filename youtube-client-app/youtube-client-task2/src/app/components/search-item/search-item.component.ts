import { Component, Input, OnInit } from '@angular/core';
import { IVideoItem} from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public item: IVideoItem;
  public color: string;

  constructor() { }

  public ngOnInit(): void {
    this.color = this.item.snippet.publishedAt;
  }

  }
