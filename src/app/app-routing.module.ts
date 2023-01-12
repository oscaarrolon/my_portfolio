import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ConocemeComponent } from './components/conoceme/conoceme.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'conoceme', component: ConocemeComponent },
  { path: 'curriculum', component: CurriculumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
