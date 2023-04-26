import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { GuardGuard } from './services/guard.guard';


const routes: Routes = [
  {path: '', component: IndexComponent, canActivate: [GuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'sobre mi', component: HeaderComponent},
  {path: 'experiencia', component: ExperienciaLaboralComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'educacion', component: StudiesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: FooterComponent},
  
  {path: '**', component: Error404Component},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
