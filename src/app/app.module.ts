import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';

import { SharedModule } from './shared/shared.module';

//Cambiar el local de la app
import localEs from  '@angular/common/locales/es-MX'; 
import localFr from  '@angular/common/locales/fr'; 
import { registerLocaleData } from '@angular/common'
registerLocaleData( localEs );
registerLocaleData( localFr );
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,    
    SharedModule,
    SalesModule
  ],
  providers: [
    { 
      provide: LOCALE_ID, useValue:'es-MX'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
