import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOfHeroesComponent } from './cards-of-heroes.component';

describe('CardsOfHeroesComponent', () => {
  let component: CardsOfHeroesComponent;
  let fixture: ComponentFixture<CardsOfHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsOfHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsOfHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
