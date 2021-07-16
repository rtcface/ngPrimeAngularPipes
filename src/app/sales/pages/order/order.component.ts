import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent  {

  isUpperCase: boolean = true;
  orderby: string = 'name';

  heroes: Heroe[] = [
    {
      name: 'SuperMan',
      flying: true,
      color: Color.blue      
    },
    {
      name: 'BatMan',
      flying: false,
      color: Color.black      
    },
    {
      name: 'Hulk',
      flying: false,
      color: Color.green      
    },
    {
      name: 'Wonder Woman',
      flying: true,
      color: Color.gold      
    },
    {
      name: 'Spider-Man',
      flying: false,
      color: Color.red      
    },
    {
      name: 'Ant-Man',
      flying: true,
      color: Color.red      
    },

  ];

  
  
  upperCaseChanged(): void {
    (this.isUpperCase) ? this.isUpperCase=false : this.isUpperCase = true;
  }

  changeOrderBy( type: string): void {
    this.orderby = type;
  }



}
