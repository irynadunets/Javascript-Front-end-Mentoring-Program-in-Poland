import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem} from '../models/search-item.model';

@Pipe({
  name: 'sortViews'
})
export class SortViewsPipe implements PipeTransform {

  public transform(value: IVideoItem[], criterion: string): IVideoItem[] {
    if (criterion === 'viewInc') {
      return value.sort ( function(item1: IVideoItem, item2: IVideoItem): number {
       return item1.statistics.viewCount - item2.statistics.viewCount;
    });
  } else if (criterion === 'viewDec') {
     return value.sort (function (item1: IVideoItem, item2: IVideoItem): number {
      return item2.statistics.viewCount - item1.statistics.viewCount;
   });
   } else {
     return value;
   }
  }

}
