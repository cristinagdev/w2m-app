import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
      name: ['', Validators.required],
      gender: ['', Validators.required],
      power: ['', Validators.required]
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
            const {name, gender, power }= this.hero;
            this.form.setValue({
              name,
              gender,
              power
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
  get powerControl(): FormControl {
    return this.form.get('power') as FormControl;
  }

  submit(){
    console.log(this.form.value);
    if(this.editHero){
         this.heroService.editHero(this.hero.id, this.form.value).subscribe((res) => console.log(res))
        this.router.navigate(['/heroes'])
    }else{
      this.heroService.createHero(this.form.value).subscribe((res) => console.log(res))
      this.router.navigate(['/heroes'])
    }


  }
}
