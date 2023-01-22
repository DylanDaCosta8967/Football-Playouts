import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RunbuttonComponent } from './components/runbutton/runbutton.component';
import { SportsComponent } from './components/sports/sports.component';
import { SceneTreeComponent } from './components/scene-tree/scene-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RunbuttonComponent,
    SportsComponent,
    SceneTreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
