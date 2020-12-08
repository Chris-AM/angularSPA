
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from './components/about/about.component';
import { ListHeroesComponent } from './components/list_heroes/list_heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesSearcherComponent } from './components/heroes-searcher/heroes-searcher.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'listHeroes', component: ListHeroesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes/:id', component: HeroesComponent },
  { path: 'heroesSearcher/:searchTerm', component: HeroesSearcherComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);