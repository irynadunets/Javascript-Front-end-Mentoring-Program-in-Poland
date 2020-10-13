import { ISearchItem } from './search-item/search-item.model';

export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: ISearchItem[];
}

interface IpageInfo {
    totalResults: number;
    resultsPerPage: number;
}
