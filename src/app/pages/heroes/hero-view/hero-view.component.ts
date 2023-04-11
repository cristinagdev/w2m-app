import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../interfaces/hero.interface';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.scss']
})
export class HeroViewComponent implements OnInit {

  hero!: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService){}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      const id= param['id'];
      this.heroService.getHero(id).subscribe((res)=> {
        this.hero= res;
      })
    })
  }


}
