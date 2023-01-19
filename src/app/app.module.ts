import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RunbuttonComponent } from './components/runbutton/runbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RunbuttonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
