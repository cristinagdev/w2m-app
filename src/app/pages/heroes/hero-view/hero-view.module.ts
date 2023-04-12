import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewComponent } from './hero-view.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

const routes: Routes = [
  {
    path: '',
    component: HeroViewComponent
  },
]


@NgModule({
  declarations: [
    HeroViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class HeroViewModule { }
