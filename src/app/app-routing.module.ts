import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'heroes'
  },
  {
    path: 'heroes',
    loadChildren: () => import('./pages/heroes/heroes.module').then((m)=> m.HeroesModule)
  },
  {
    path:'heroes/view',
    loadChildren: () => import('./pages/heroes/hero-view/hero-view.module').then((m)=> m.HeroViewModule)
  },
  {
    path: 'heroes/create',
    loadChildren: () => import('./pages/heroes/hero-create-edit/hero-create-edit.module').then((m)=> m.HeroCreateEditModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
