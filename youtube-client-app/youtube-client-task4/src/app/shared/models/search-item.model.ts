export interface IVideoItem {
   kind: string;
   etag: string;
   id: string;
   snippet: ISnippet;
   statistics: {
     viewCount: string,
     likeCount: string,
     dislikeCount: string,
     favoriteCount: string,
     commentCount: string
    };
}

export interface ISearchItem {
   kind: string;
   etag: string;
   id: {
     kind: string;
     videoId: string;
   };
   snippet: ISsnippet;
   statistics: {
     viewCount: string,
     likeCount: string,
     dislikeCount: string,
     favoriteCount: string,
     commentCount: string
    };
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnailsItem,
    medium: IThumbnailsItem,
    high: IThumbnailsItem,
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface ISsnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: IThumbnailsItem,
    medium: IThumbnailsItem,
    high: IThumbnailsItem,
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface IThumbnailsItem {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}
