import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-of-heroes',
  templateUrl: './cards-of-heroes.component.html',
  styleUrls: ['./cards-of-heroes.component.css']
})
export class CardsOfHeroesComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;
  //I'm creating a JS Event
  @Output() pickHero: EventEmitter<number>;

  constructor(private router: Router) {
    //Initializing the EventEmitter
    this.pickHero = new EventEmitter();
  }

  ngOnInit(): void {
  }

  findHero() {
  this.router.navigate(['/heroes', this.index])
  /*this.pickHero.emit(this.index);*/
  }
}
