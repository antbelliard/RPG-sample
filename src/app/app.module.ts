import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstGameComponent } from './first-game/first-game.component';
import { SecondGameComponent } from './second-game/second-game.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first', component: FirstGameComponent },
  { path: 'second', component: SecondGameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstGameComponent,
    SecondGameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
