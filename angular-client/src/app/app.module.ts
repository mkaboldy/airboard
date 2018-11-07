import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { MainnavComponent } from './components/mainnav/mainnav.component';
import { ArrivalsComponent } from './components/arrivals/arrivals.component';
import { DeparturesComponent } from './components/departures/departures.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MainnavComponent,
    ArrivalsComponent,
    DeparturesComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
