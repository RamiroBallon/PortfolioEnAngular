import { Component, OnInit, OnDestroy } from '@angular/core';
import { Experiencia } from 'src/app/modelos-entidades/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { identity, Subscription } from 'rxjs';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Persona } from 'src/app/modelos-entidades/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  //esto es para traer distintos datos arrays
  experiencias: Experiencia[]=[]; //se llama al "modelo" que es un array
  eliminacionSubscription!: Subscription;
  persona: Persona[] = [];
  modoEdit: any;

  constructor(private serviExperiencia: ExperienciaService, private personaService: PersonaService, private autService: AutentificacionService) { } //serviExperiencia es un alias, lo ponemos como queramos

  ngOnInit(): void { //se encarga de mostrar las cosas apenas carga la pagina (no hagas nada solo mostrame) si o si se implementan al inicio
    this.cargarExperiencia();
    // this.eliminacionSubscription = this.serviExperiencia.getEliminacionSubject().subscribe((id) => {
    //   this.experiencias = this.experiencias.filter((exp) => exp.id !== id);
    // });
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
  public cargarExperiencia():void{ //void carga los datos, pero no los retorna
    this.serviExperiencia.verExperiencias().subscribe(data => {this.experiencias=data}); //data es un alias
  }

  // delete (id?:number){
  //   if(id !=undefined){
  //     this.serviExperiencia.eliminarExperiencia(id).subscribe(
  //       data =>{
  //         //alert("Experiencia eliminada correctamente")
  //         this.cargarExperiencia();
  //       }, err =>{
  //         alert("no se pudo eliminar la experiencia")
  //       })
  //   }
  // }

  //METODO PARA ELIMINAR LOS DATOS EN EXPERIENCIA
  experienciaSeleccionada: number | undefined;
  // función para eliminar la experiencia seleccionada
delete(id: number | undefined) {
  // si no se seleccionó ninguna experiencia, mostrar un mensaje de alerta
  if (id === undefined) {  //!id
    alert("Debe seleccionar una experiencia para eliminar.");
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
  this.serviExperiencia.eliminarExperiencia(id).subscribe(data=>{alert("Experiencia eliminada")
  window.location.reload();
}, err => {
  alert ("experiencia eliminada correctamente");
  window.location.reload();
});


}
}















/*import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {
  //esto es para traer distintos datos arrays
  experiencias  : any = []; //esto es un array
  nombre: string = ''; //esto es un dato simple
  constructor(private datos:DatosService) { } //datos es un alias, lo ponemos como queramos

  ngOnInit(): void { //void trae los datos
    this.datos.getDatos().subscribe(data => {
      this.experiencias = data.experiencia; //2do experiencia es del json
    })
  }

}*/