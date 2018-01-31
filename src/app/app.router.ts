import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FirstGameComponent } from './first-game/first-game.component';
import { SecondGameComponent } from './second-game/second-game.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first', component: FirstGameComponent },
  { path: 'second', component: SecondGameComponent }
];