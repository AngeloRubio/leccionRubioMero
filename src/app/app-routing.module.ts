import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
import { Vista3Component } from './components/vista3/vista3.component';

const routes: Routes = [
  { path: '', redirectTo: '/vista1', pathMatch: 'full'},
  { path: 'vista1', component: Vista1Component },
  { path: 'vista2', component: Vista2Component },
  { path: 'vista3', component: Vista3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
