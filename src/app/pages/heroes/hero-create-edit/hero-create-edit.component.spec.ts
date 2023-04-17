import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { HeroesComponent } from '../heroes.component';
import { Hero } from '../interfaces/hero.interface';
import { HeroService } from '../services/hero.service';

import { HeroCreateEditComponent } from './hero-create-edit.component';

const heroMock: Hero = {
    name: "BATMAN",
    gender: "male",
    ability: "strength",
    id: 1
  }


const heroServiceMock = {
  editHero:(id: number, hero: Hero) => of(hero),
  createHero:(hero: Hero) => of(hero)
}



describe('HeroCreateEditComponent', () => {
  let component: HeroCreateEditComponent;
  let fixture: ComponentFixture<HeroCreateEditComponent>;




  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([
          { path: 'heroes', component: HeroesComponent}
      ]),
        TranslateModule.forRoot()
      ],
      declarations: [ HeroCreateEditComponent ],
      providers: [
        {
          provide: HeroService,
          useValue: heroServiceMock
        },

      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a valid form', () => {
    const name= component.form.controls['name']
    const gender= component.form.controls['gender']
    const ability= component.form.controls['ability']

    name.setValue('BATMAN')
    gender.setValue('Male')
    ability.setValue('strength')

    expect(component.form.invalid).toBeFalse();

  });

  it('should call createHero ', () => {
    const spy = spyOn(heroServiceMock, 'createHero');
    spy.and.returnValue(of(heroMock));

    component.submit();
    expect(heroServiceMock.createHero).toHaveBeenCalled();

  });

  it('should call editHero ', () => {

    const spy = spyOn(heroServiceMock, 'editHero');
    spy.and.returnValue(of(heroMock));
    component.editHero = true;
    component.hero= heroMock;
    component.submit();
    expect(heroServiceMock.editHero).toHaveBeenCalled();

  });




});
