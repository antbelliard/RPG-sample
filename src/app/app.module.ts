import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstGameComponent } from './first-game/first-game.component';
import { SecondGameComponent } from './second-game/second-game.component';


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
