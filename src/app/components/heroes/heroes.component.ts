import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServiceService } from '../../services/heroes-service.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroe: any = {}

  constructor(private aRoute: ActivatedRoute,
              private heroService: HeroesServiceService) { 
    
    this.aRoute.params.subscribe(params => {
      this.heroe = heroService.getHero(params['id'])
    })
  }

  ngOnInit(): void {
  }

}
