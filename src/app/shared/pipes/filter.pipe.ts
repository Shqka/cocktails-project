import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cocktails: Cocktail[], search: string): Cocktail[] | null {
    if (!search.length) {
      return cocktails;
    } else {
      return cocktails.filter( cocktail => cocktail.name.toLowerCase().includes(search.toLowerCase()) );
    }   
  }

}
