import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-departures',
  templateUrl: './departures.component.html',
  styleUrls: ['./departures.component.css']
})
export class DeparturesComponent implements OnInit {

  departures;

  constructor(private apiService: ApiService) { }

  loadDepartures() {
    this.apiService.getDepartures().subscribe(data => { this.departures = data.departures; });
  }

  ngOnInit() {
    this.loadDepartures();
  }

}
