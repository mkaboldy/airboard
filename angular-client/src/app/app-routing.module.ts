import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArrivalsComponent } from './components/arrivals/arrivals.component';
import { DeparturesComponent } from './components/departures/departures.component';
import { AboutComponent } from './components/about/about.component';


const appRoutes: Routes = [
  { path: '', component: ArrivalsComponent },
  { path: 'arrivals', component: ArrivalsComponent },
  { path: 'departures', component: DeparturesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ArrivalsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
