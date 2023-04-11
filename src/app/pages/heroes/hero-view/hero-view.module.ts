import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroViewComponent } from './hero-view.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    HeroViewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: []
})
export class HeroViewModule { }
