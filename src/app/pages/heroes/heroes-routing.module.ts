import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroViewComponent } from './hero-view/hero-view.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent
  },
  {
    path:'view',
    component: HeroViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
