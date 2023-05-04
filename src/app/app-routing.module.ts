import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SumaryComponent } from './pages/sumary/sumary.component';

const routes: Routes = [
  {path: 'america',component: HomeComponent},
  {path: 'america',component: SumaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

