import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,  Routes} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RunbuttonComponent } from './components/runbutton/runbutton.component';
import { SportsComponent } from './components/sports/sports.component';
import { SceneTreeComponent } from './components/scene-tree/scene-tree.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RunbuttonComponent,
    HeaderComponent,
    SportsComponent,
    SceneTreeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent,
     SceneTreeComponent,
     RunbuttonComponent,
    HeaderComponent,
    SportsComponent]
})
export class AppModule { }

