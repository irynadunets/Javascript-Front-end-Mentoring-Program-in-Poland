import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';
import { Location } from '@angular/common';
import { IVideoItem} from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  providers: [YoutubeService]
})
export class InformationComponent implements OnInit {

  public items: IVideoItem[] = [];
  public id: string;
  public card: IVideoItem;
  public color: string;
  public date: Date|string;
  public img: string;
  public description: string;
  public viewCount: string;
  public likeCount: string;
  public dislikeCount: string;
  public commentCount: string;
  public title: string;

 constructor(private route: ActivatedRoute, private location: Location,
             private youtubeService: YoutubeService) {
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
   }

  public ngOnInit(): void {
    this.initCard();
  }

  public initCard(): void {
    this.youtubeService.getItemById(this.id)
      .subscribe(
        data => {
          this.card = data.items[0];
          this.color = this.card.snippet.publishedAt;
          this.title = this.card.snippet.title;
          this.description = this.card.snippet.description;
          this.date = new Date(this.color);
          this.date = this.date.toDateString().substring(-25);
          this.img = this.card.snippet.thumbnails.high.url;
          this.viewCount = this.card.statistics.viewCount;
          this.likeCount = this.card.statistics.likeCount;
          this.dislikeCount = this.card.statistics.dislikeCount;
          this.commentCount = this.card.statistics.commentCount;
        },
        err => console.log(err)
      );
  }

  public return(): void {
    this.location.back();
  }

 }
