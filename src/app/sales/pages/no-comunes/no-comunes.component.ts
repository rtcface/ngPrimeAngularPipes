import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
    
   //  i18nSelect
    name: string = 'Rodrigo'   
    genero: string = 'masculino'

    invitacionMap = {
      'masculino':'invitarlo',
      'femenino': 'invitarla'
    }

    //i18nPlural

    clients: string[] = ['Maria','Rafael','juan','luis','peter'];
    clientsMap = {
      '=0':'no tenemos clientes en cola de espera.',
      '=1':'tenemos un cliente en cola de espera.',
      '=2':'tenemos 2 clientes en cola de espera.',
      'other': 'tenemos # clientes en cola de espera.'
    }

    changeGenero () {
      this.name='Ana';
      this.genero='femenino'
    }

    deleteClients () {
      this.clients.pop();
    }

    addCliente(){            
      this.clients.push('uno mas');
      console.log(
        this.clients
      );
    }

    //key Value Pipes

    person = { 
      name   : 'Ramiro Tepehua Cortes',
       old   : 33,
       street: 'street 4, edifice 42'

    }

    // Json Pipes
    heroes = [
      {
        name : 'SuperMan',
        flying  : true
      },
      {
        name : 'IronMan',
        flying  : true
      },
      {
        name : 'SpiderMan',
        flying  : false
      },
    ];

    // ASYNC PIPE

    //myObservable = interval(3000).pipe( tap(() => console.log('interval') ));
    myObservable = interval(4000);

    valuePromise = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve('Fin de la promesa');
      }, 3500);
    });







}
