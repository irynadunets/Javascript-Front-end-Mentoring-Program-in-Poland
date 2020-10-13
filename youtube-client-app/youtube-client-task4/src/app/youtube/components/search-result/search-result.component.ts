import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { IVideoItem} from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  providers: [ YoutubeService ]
})

export class SearchResultComponent implements OnInit {
  @Input() public searchText: string;
  @Input() public filtrValue: string;
  @Input() public param1: string;
  @Input() public param2: string;
  public items: IVideoItem[] = [];

  constructor(private youtubeService: YoutubeService) { }

  public ngOnInit(): void {
    this.initCards();
  }

  public initCards(): void {
    this.youtubeService.getData('12', this.searchText)
      .subscribe(
          data => {
        this.items = data.items;
        },
          err => console.log(err)
      );
  }
}
