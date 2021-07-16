import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UppercaseCustom } from './pipes/uppercaseCustom.pipe';
import { FlyingPipe } from './pipes/pipeFlying';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoComunesComponent,
    BasicsComponent,
    OrderComponent,
    UppercaseCustom,
    FlyingPipe,
    OrderPipe,
  ],
  
  exports: [NumbersComponent,
    NoComunesComponent,
    BasicsComponent,
    OrderComponent],

  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserAnimationsModule
  ]
})
export class SalesModule { }
