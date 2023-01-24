import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,  Routes} from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RunbuttonComponent } from './components/runbutton/runbutton.component';
import { SportsComponent } from './components/sports/sports.component';
import { SceneTreeComponent } from './components/scene-tree/scene-tree.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { CryptoComponent } from './components/crypto/crypto.component';

import { CryptoService } from './services/crypto.service'

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
    CryptoComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    

  ],
  providers: [
    CryptoService
  ],
  bootstrap: [AppComponent,
     SceneTreeComponent,
     RunbuttonComponent,
    HeaderComponent,
    SportsComponent]
})
export class AppModule { }

