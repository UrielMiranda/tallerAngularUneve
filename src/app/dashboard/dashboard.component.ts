import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  movies = [
    {
      title: 'Spider-Man: Sin camino a casa',
      year: 2021,
    },
    {
      title: 'Efímera Negra La Bella Durmiente',
      year: 2015,
    },
    {
      title: 'Spider-Man: Sin camino a casa',
      year: 2021,
    },
    {
      title: 'Efímera Negra La Bella Durmiente',
      year: 2015,
    },
    {
      title: 'Spider-Man: Sin camino a casa',
      year: 2021,
    },
    {
      title: 'Efímera Negra La Bella Durmiente',
      year: 2015,
    },
    {
      title: 'Spider-Man: Sin camino a casa',
      year: 2021,
    },
    {
      title: 'Efímera Negra La Bella Durmiente',
      year: 2015,
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
