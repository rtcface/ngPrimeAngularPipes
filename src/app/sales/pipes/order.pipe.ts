import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform( heroes: Heroe[], orderBy: string = 'sin valor'  ): Heroe[] {
    
    console.log(orderBy);

    switch (orderBy) {
      case 'name':
        return heroes = heroes.sort( (a, b) => (a.name > b.name) ? 1 : -1);        
      case 'flying':
        return heroes = heroes.sort( (a, b) => (a.flying > b.flying) ? -1 : 1);
      case 'color':
        return heroes = heroes.sort( (a, b) => (a.color > b.color) ? 1 : -1);
      default:
        return heroes;
    }   
  }

}
