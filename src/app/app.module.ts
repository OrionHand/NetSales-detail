import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

import { SumaryService } from './services/sumary.service';
import { TarjetacdcComponent } from './components/tarjetacdc/tarjetacdc.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarjetaComponent,
    TarjetacdcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SumaryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
