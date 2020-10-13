import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem} from '../../shared/models/search-item.model';

@Pipe({
  name: 'sortViews'
})
export class SortViewsPipe implements PipeTransform {

  public transform(value: IVideoItem[], criterion: string): IVideoItem[] {
    if (criterion === 'viewInc') {
      return value.sort ( function(item1: IVideoItem, item2: IVideoItem): number {
       return parseInt(item1.statistics.viewCount, 10) - parseInt(item2.statistics.viewCount, 10);
    });
  } else if (criterion === 'viewDec') {
     return value.sort (function (item1: IVideoItem, item2: IVideoItem): number {
      return parseInt(item2.statistics.viewCount, 10) - parseInt(item1.statistics.viewCount, 10);
   });
   } else {
     return value;
   }
  }

}
