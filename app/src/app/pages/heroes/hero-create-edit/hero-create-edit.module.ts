import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroCreateEditComponent } from './hero-create-edit.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesRoutingModule } from '../heroes-routing.module';
import { UppercaseDirective } from '../directives/uppercase.directive';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: 'create',
    component: HeroCreateEditComponent
  },
]



@NgModule({
  declarations: [
    HeroCreateEditComponent,
    UppercaseDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
    TranslateModule
  ],
  exports: [
    RouterModule,
    HeroCreateEditComponent
  ]
})
export class HeroCreateEditModule { }
