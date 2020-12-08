import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MESSAGES } from '../shared/constants/messages';
import { HeroesServiceService } from '../../services/heroes-service.service';
import { Heroes } from '../shared/interfaces/heroesInterface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './list_heroes.component.html',
  styleUrls: ['./list_heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  where_from = '';
  heroes = '';
  heroesArray: Heroes[] = [];
  constructor(private _heroService: HeroesServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.where_from = _.get(MESSAGES, 'HEROES.WHERE_FROM');
    this.heroes = _.get(MESSAGES, 'HEROES.HEROES');
    this.heroesArray = this._heroService.getHeores();
  }
  findHero(idHero) {
    this.router.navigate(['/heroes', idHero])
  }
}
