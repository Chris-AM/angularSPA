import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-of-heroes',
  templateUrl: './cards-of-heroes.component.html',
  styleUrls: ['./cards-of-heroes.component.css']
})
export class CardsOfHeroesComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  findHero() {
    this.router.navigate(['/heroes', this.index])
  }
}
