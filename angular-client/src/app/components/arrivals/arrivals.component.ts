import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {

  arrivals;

  constructor(private apiService: ApiService) { }

  loadArrivals() {
    this.apiService.getArrivals().subscribe(data => { this.arrivals = data.arrivals; });
  }

  ngOnInit() {
    this.loadArrivals();
  }

}
