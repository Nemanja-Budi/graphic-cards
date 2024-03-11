import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { GraphicCardsComponent } from './components/pages/graphic-cards/graphic-cards.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'graphic-cards', component: GraphicCardsComponent },
  // { path: "graphic-cards/:id", component: RestoranListComponent },

  { path: '', redirectTo: '/home', pathMatch: 'prefix' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
