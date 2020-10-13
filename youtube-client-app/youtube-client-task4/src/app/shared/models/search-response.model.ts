import { ISearchItem, IVideoItem} from './search-item.model';

export interface IVideoResponse {
  kind: string;
  etag: string;
  items: ISearchItem[];
}

export interface ISearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  items: IVideoItem[];
}
