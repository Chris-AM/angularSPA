import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSearcherComponent } from './heroes-searcher.component';

describe('HeroesSearcherComponent', () => {
  let component: HeroesSearcherComponent;
  let fixture: ComponentFixture<HeroesSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
