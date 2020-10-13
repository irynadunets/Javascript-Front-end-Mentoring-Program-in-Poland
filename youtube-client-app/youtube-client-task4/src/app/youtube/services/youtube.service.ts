import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription, of } from 'rxjs';
import { ISearchResponse } from '../../shared/models/search-response.model';
import { IVideoResponse } from '../../shared/models/search-response.model';
import { ISearchItem, IVideoItem } from '../../shared/models/search-item.model';
import {  map, retry, debounceTime,  distinctUntilChanged,  mergeMap,  tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private readonly YOUTUBE_SEARCH_URL: string = 'search?';
  private readonly YOUTUBE_VIDEO_URL: string = 'videos';

  constructor(private http: HttpClient) { }

  public getData(
    maxResults: string = '15',
    searchText?: string,
  ): Observable<ISearchResponse> {
    const params: HttpParams = new HttpParams()
    .set('type', 'video')
    .set('part', 'snippet')
    .set('maxResults', maxResults)
    .set('q', searchText);
    return this.http
      .get<IVideoResponse>(`${this.YOUTUBE_SEARCH_URL}`, {params})
      .pipe(
        map((videoResponse: IVideoResponse) => {
          const listItems: string = videoResponse.items.map(items => items.id.videoId).join(',');
          return listItems;
        }),
        mergeMap(listItems =>
          this.http
            .get<ISearchResponse>(
              `${this.YOUTUBE_VIDEO_URL}?&id=${listItems}&part=snippet,statistics`
              )
        )
      );
  }

public getItemById(id: string): Observable<ISearchResponse> {
    return this.http.get<ISearchResponse>(`${this.YOUTUBE_VIDEO_URL}?&id=${id}&part=snippet,statistics`);
  }
}
