import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem} from '../models/search-item.model';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  public transform(value: IVideoItem[], criterion: string): IVideoItem[] {

 if (criterion === 'dateInc') {
   return value.sort ( function (date1: IVideoItem, date2: IVideoItem): number {
    return +new Date(date1.snippet.publishedAt) - (+new Date(date2.snippet.publishedAt));
 });
} else if (criterion === 'dateDec') {
  return value.sort ( function (date1: IVideoItem, date2: IVideoItem): number {
   return +new Date(date2.snippet.publishedAt) - (+new Date(date1.snippet.publishedAt));
});
} else {
  return value;
}
}
}
