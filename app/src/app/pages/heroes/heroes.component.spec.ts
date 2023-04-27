import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './services/hero.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { TranslateModule } from '@ngx-translate/core';
import {  of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const mockList = [

  {
    "name": "BATMAN",
    "gender": "male",
    "ability": "strength",
    "id": 1
  },
  {
    "id": 2,
    "name": "SPIDERMAN",
    "ability": "spider sense",
    "gender": "male"
  },
]


const heroServiceMock= {
  getListHeroes:()=> of(mockList),
  deleteHero:(id: number)=> of({
    "id": 2,
    "name": "SPIDERMAN",
    "ability": "spider sense",
    "gender": "male"
  })
}



describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ModalModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot()
      ],
      declarations: [ HeroesComponent ],
      providers:[
          {
            provide: HeroService,
            useValue: heroServiceMock
          },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of heroes ', () => {
    const spy = spyOn(heroServiceMock, 'getListHeroes');
    spy.and.returnValue(of(mockList));

    component.getHeroesList();
    expect(heroServiceMock.getListHeroes).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(mockList)
  });

  it('should open the modal and delete a hero', () => {

    const mockHero= {
      "id": 2,
      "name": "SPIDERMAN",
      "ability": "spider sense",
      "gender": "male"
    }

    const openDialogSpy = spyOn(component.dialog, 'open')
    .and
    .returnValue({
      afterClosed: () => of(true)
    } as MatDialogRef <typeof component>);

    const spy = spyOn(heroServiceMock, 'deleteHero');
    spy.and.returnValue(of(mockHero));

    component.deleteHero(mockHero.id);

    expect(openDialogSpy).toHaveBeenCalled();
    expect(heroServiceMock.deleteHero).toHaveBeenCalled();


  });


});
