import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private domain = 'http://localhost:8080/api';

  constructor(private http: Http) { }

  getArrivals() {
    return this.http.get(this.domain + '/arrivals' ).pipe(map(res => res.json()));
  }

  getDepartures() {
    return this.http.get(this.domain + '/departures' ).pipe(map(res => res.json()));
  }

}
