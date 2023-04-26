import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/modelos-entidades/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { identity, Subscription } from 'rxjs';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Persona } from 'src/app/modelos-entidades/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  //esto es para traer distintos datos arrays
  proyectos: Proyecto[] = []; //LA ENTIDAD
  eliminacionSubscription!: Subscription;
  persona: Persona[] = [];
  modoEdit: any;

  constructor(private serviProyecto: ProyectoService, private personaService: PersonaService, private autService: AutentificacionService) {} //EL SERVICIO DE LA ENTIDAD

  ngOnInit(): void {
    //void trae los datos
    this.cargarProyecto();

    this.personaService.verPersonas().subscribe(data =>{
      this.persona = data
    });
    if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
  }
//METODO PARA CARGAR LOS DATOS EN LA PAGINA
  public cargarProyecto(): void {
    //void carga los datos, pero no los retorna
    this.serviProyecto.verProyectos().subscribe(data => {this.proyectos = data});
  }

  //METODO PARA ELIMINAR LOS DATOS EN PROYECTO
  proyectoSeleccionado: number | undefined;
  // función para eliminar proyecto seleccionada
delete(id: number | undefined) {
  // si no se seleccionó ninguna, mostrar un mensaje de alerta
  if (id === undefined) {  //!id
    alert("Debe seleccionar un proyecto para eliminar.");
    return;
  }

  this.serviProyecto.eliminarProyecto(id).subscribe(data=>{alert("Proyecto eliminado")
  window.location.reload();
}, err => {
  alert ("proyecto eliminado correctamente");
  window.location.reload();
});


}


}
