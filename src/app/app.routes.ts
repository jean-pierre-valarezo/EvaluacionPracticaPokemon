import { Routes } from '@angular/router';
import { LoginPage } from './auth/login-page/login-page';
import { HomePage } from './pokemon/pages/home-page/home-page';
import { PokemonDetailPageComponent } from './pokemon/pages/pokemon-detail-page/pokemon-detail-page';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginPage },
  { path: 'home', component: HomePage},

   { path: 'pokemon/:id', component: PokemonDetailPageComponent },  

  { path: '**', redirectTo: 'login' } 
];
