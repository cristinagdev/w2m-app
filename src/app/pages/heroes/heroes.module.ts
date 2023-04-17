import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { MaterialModule } from 'src/app/material.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'src/app/shared/modal/modal.module';
import { HeroCreateEditModule } from './hero-create-edit/hero-create-edit.module';
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
  declarations: [
    HeroesComponent,

  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ModalModule,
    HeroCreateEditModule,
    TranslateModule
  ]
})
export class HeroesModule { }
