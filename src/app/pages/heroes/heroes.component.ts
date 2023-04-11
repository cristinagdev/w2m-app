import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Hero } from './interfaces/hero.interface';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroesList: Hero[] = [];
  value: string= '';
  displayedColumns: string[] = ['position', 'name', 'button', 'view'];


  constructor ( private heroService: HeroService, private router: Router) {
    this.getHeroesList();

  }

  getHeroesList() {
    this.heroService.getListHeroes().subscribe((res) => {
      this.heroesList= res;
      console.log(this.heroesList);

    });
  }

  searchHero(){
    this.heroService.searchHero(this.value).subscribe((res) => {
      this.heroesList = res
    })
  }

  createNewHero(){
    const hero = {
      id: 9,
      name: 'Prueba',
      power: 'banana',
      gender: 'male'
    }
    this.heroService.createHero(hero).subscribe((res) => console.log(res)
    )
  }
  deleteHero(id: number){
    console.log(id);
    this.heroService.deleteHero(9).subscribe((res) => console.log('borrado'))
  }

  updateHero(id: number, hero: Hero){

    this.heroService.editHero(id, hero).subscribe((res) => console.log(res)
    )
  }

  viewHero(hero: Hero){
    this.router.navigate(['/heroes/view'], {
      queryParams: {id: hero.id}
    })
  }



}
