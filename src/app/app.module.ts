import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConocemeComponent } from './components/conoceme/conoceme.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    ConocemeComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
