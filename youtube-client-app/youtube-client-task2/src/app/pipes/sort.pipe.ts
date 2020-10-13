import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem} from '../models/search-item.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  public transform(value: IVideoItem[], field: string): IVideoItem[] {
    let val: IVideoItem[] = value.filter((item) => item.snippet.title.toLowerCase().includes(field));
    val.sort((a: IVideoItem, b: IVideoItem) => {
      if (a[a.snippet.title] < b[b.snippet.title]) {
        return -1;
      } else if (a[a.snippet.title] > b[b.snippet.title]) {
        return 1;
      } else {
        return 0;
      }
    });
    return field
      ? val
      : value;
  }

}
