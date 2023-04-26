import { Component, OnInit} from '@angular/core';
import { Estudio } from 'src/app/modelos-entidades/estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { identity, Subscription } from 'rxjs';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Persona } from 'src/app/modelos-entidades/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit{
    //esto es para traer distintos datos arrays
    estudios: Estudio []=[]; //llamamos a la entidad
    eliminacionSubscription!: Subscription;
    persona: Persona[] = [];
  modoEdit: any;
  
    constructor(private serviEstudio:EstudioService, private personaService: PersonaService, private autService: AutentificacionService) { } //llamamos al servicio
  
    ngOnInit(): void { //void trae los datos
      this.cargarEstudio();

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

    public cargarEstudio():void{ //void carga los datos, pero no los retorna
      this.serviEstudio.verEstudios().subscribe(data => {this.estudios=data});
    }


      //METODO PARA ELIMINAR LOS DATOS EN EXPERIENCIA
  estudioSeleccionado: number | undefined;
  // función para eliminar la experiencia seleccionada
delete(id: number | undefined) {
  // si no se seleccionó ninguna experiencia, mostrar un mensaje de alerta
  if (id === undefined) {  //!id
    alert("Debe seleccionar un estudio para eliminar.");
    return;
  }
  // llamar al método eliminarExperiencia del servicio para eliminar la experiencia
  // this.serviExperiencia.eliminarExperiencia(id).subscribe(
  //   (result) => {
  //     // si se eliminó correctamente, actualizar la lista de experiencias
  //     this.cargarExperiencia();
  //   },
  //   (error) => console.error(error)
  // );
  this.serviEstudio.eliminarEstudio(id).subscribe(data=>{alert("Estudio eliminado")
  window.location.reload();
}, err => {
  alert ("estudio eliminado correctamente");
  window.location.reload();
});


}
  
  }
