import { Component } from '@angular/core';


@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent  {

  nameLower: string = 'RaMIRO TePehua';
  nameUpper: string = 'ramiro tepeHua';
  nameCoplet: string = 'Ramiro tepehua cortes'

  date: Date = new Date();
  
}
