import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//routes
import { APP_ROUTING } from './app.routes';
//Services
import { HeroesServiceService } from './services/heroes-service.service';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ListHeroesComponent } from './components/list_heroes/list_heroes.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesSearcherComponent } from './components/heroes-searcher/heroes-searcher.component';
import { CardsOfHeroesComponent } from './components/cards-of-heroes/cards-of-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ListHeroesComponent,
    HeroesComponent,
    HeroesSearcherComponent,
    CardsOfHeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
