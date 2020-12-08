import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesServiceService } from '../../services/heroes-service.service';
import { Heroes } from '../shared/interfaces/heroesInterface';
import { MESSAGES } from '../shared/constants/messages';
import _ from 'lodash';


@Component({
  selector: 'app-heroes-searcher',
  templateUrl: './heroes-searcher.component.html',
  styleUrls: ['./heroes-searcher.component.css']
})
export class HeroesSearcherComponent implements OnInit {

  searching = '';
  searchError = '';
  hero: string = '';
  heroArray: Heroes[] = [];

  constructor(private aRouter: ActivatedRoute,
    private heroServ: HeroesServiceService,
    private router: Router) { }

  ngOnInit(): void {

    this.aRouter.params.subscribe(params => {
      this.hero = params['searchTerm'];
      this.heroArray = this.heroServ.searchHero(params['searchTerm']);
      console.log(this.heroArray)
    });

    this.searchError = _.get(MESSAGES, 'HEROES_SEARCHING.SEARCH_ERROR');
    this.searching = _.get(MESSAGES, 'HEROES_SEARCHING.SEARCHING');
  }
  findHero(searchTerm) {
    this.router.navigate(['/heroes/', searchTerm])
    
  }

}