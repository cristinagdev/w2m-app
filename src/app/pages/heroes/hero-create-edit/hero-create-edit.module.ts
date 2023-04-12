import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroCreateEditComponent } from './hero-create-edit.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from '../heroes-routing.module';

const routes: Routes = [
  {
    path: 'create',
    component: HeroCreateEditComponent
  },
]



@NgModule({
  declarations: [
    HeroCreateEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    HeroesRoutingModule
  ],
  exports: [
    RouterModule,
    HeroCreateEditComponent
  ]
})
export class HeroCreateEditModule { }
