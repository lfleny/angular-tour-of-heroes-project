import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
    selector: 'heroes',
    providers: [HeroService],
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];
    title = 'Tour of Heroes';

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
