import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { EditarEducacionComponent } from './modales/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './modales/editar-experiencia/editar-experiencia.component';
import { EditarSkillsComponent } from './modales/editar-skills/editar-skills.component';
import { AgregarEducacionComponent } from './modales/editar-educacion/agregar-educacion/agregar-educacion.component';
import { AgregarExperienciaComponent } from './modales/editar-experiencia/agregar-experiencia/agregar-experiencia.component';
import { AgregarSkillsComponent } from './modales/editar-skills/agregar-skills/agregar-skills.component';
import { EditarProyectosComponent } from './modales/editar-proyectos/editar-proyectos.component';
import { AgregarProyectosComponent } from './modales/editar-proyectos/agregar-proyectos/agregar-proyectos.component';
import { EditarSobremiComponent } from './modales/editar-sobremi/editar-sobremi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    StudiesComponent,
    ExperienciaLaboralComponent,
    SkillsComponent,
    ProyectosComponent,
    IndexComponent,
    LoginComponent,
    LogoutComponent,
    ModalLoginComponent,
    EditarEducacionComponent,
    EditarExperienciaComponent,
    EditarSkillsComponent,
    AgregarEducacionComponent,
    AgregarExperienciaComponent,
    AgregarSkillsComponent,
    EditarProyectosComponent,
    AgregarProyectosComponent,
    EditarSobremiComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
