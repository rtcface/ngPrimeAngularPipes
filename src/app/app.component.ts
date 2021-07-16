import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /* name: string = 'RAmiro TePehua CoRtEs';
  valor: number = 100000;
  obj= {
    nombre: 'Ramiro',
    address: 'calle 4'
  };
  showName(){
    console.log(this.name);
    console.log(this.obj);
    console.log(this.valor);
  } */

  /**
   *
   */
  constructor( private primengConfig:PrimeNGConfig  ) {}
  
  

  ngOnInit(){
    this.primengConfig.ripple=true; 
  }


}
