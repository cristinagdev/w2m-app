import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { HeroCreateEditModule } from './hero-create-edit/hero-create-edit.module';




@NgModule({
  declarations: [
    HeroesComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    HeroCreateEditModule,
    // Borrar si no se usa
  ]
})
export class HeroesModule { }
