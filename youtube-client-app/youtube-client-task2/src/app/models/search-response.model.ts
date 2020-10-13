import { ISearchItem } from './search-item.model';

export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: IpageInfo;
  items: ISearchItem[];
}

interface IpageInfo {
    totalResults: number;
    resultsPerPage: number;
}
