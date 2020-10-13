import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVideoItem } from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public item: IVideoItem;
  public color: string;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.color = this.item.snippet.publishedAt;
  }

  public showInformation(): void {
    this.router.navigate(['information', this.item.id]);
  }

  }
