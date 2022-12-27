import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'sobre mi', component: HeaderComponent},
  {path:'experiencia', component: ExperienciaLaboralComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
