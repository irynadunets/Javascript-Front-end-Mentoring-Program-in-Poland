import { Pipe, PipeTransform } from '@angular/core';
import { IVideoItem} from '../models/search-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(value: IVideoItem[], criterion: string): IVideoItem[] {
    return criterion
      ? value.filter((item) => item.snippet.title.toLowerCase().includes(criterion.toLowerCase()))
      : value;
  }

}
