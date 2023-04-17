import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UppercaseDirective } from '../directives/uppercase.directive';
import { Hero } from '../interfaces/hero.interface';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-create-edit',
  templateUrl: './hero-create-edit.component.html',
  styleUrls: ['./hero-create-edit.component.scss']
})
export class HeroCreateEditComponent implements OnInit{

  form!: FormGroup;
  hero!: Hero;
  editHero: boolean = false;

  constructor(private fb: FormBuilder, private heroService: HeroService, private activatedRoute: ActivatedRoute, private router: Router){
    this.form = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3)] ],
      gender: ['', Validators.required],
      ability: ['' , [Validators.required, Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      const id= param['id'];
      this.editHero = id;

      if(this.editHero) {

        this.heroService.getHero(id).subscribe((res)=> {
          this.hero= res;
          if(this.hero){
            const {name, gender, ability }= this.hero;
            this.form.setValue({
              name,
              gender,
              ability
            })
          }
        })
      }

    })
  }

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }
  get genderControl(): FormControl {
    return this.form.get('gender') as FormControl;
  }
  get abilityControl(): FormControl {
    return this.form.get('ability') as FormControl;
  }

   submit(): void{

    const nameUppercase= this.nameControl.value.toUpperCase();
    this.nameControl.setValue(nameUppercase)

    if(this.editHero){
         this.heroService.editHero(this.hero.id, this.form.value).subscribe()
        this.router.navigate(['/heroes'])
    }else{
      this.heroService.createHero(this.form.value).subscribe()
      this.router.navigate(['/heroes'])
    }


  }
}
