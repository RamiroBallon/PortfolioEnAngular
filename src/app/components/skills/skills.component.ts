import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/modelos-entidades/skill';
import { identity, Subscription } from 'rxjs';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Persona } from 'src/app/modelos-entidades/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
    //esto es para traer distintos datos arrays
    skills: Skill[]=[]; //esto es un array
    eliminacionSubscription!: Subscription;
    persona: Persona[] = [];
  modoEdit: any;


    constructor(private serviSkill:SkillService, private personaService: PersonaService, private autService: AutentificacionService) { } //serviSkill es un alias, lo ponemos como queramos

    ngOnInit(): void { //void trae los datos
      this.cargarSkill();

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

    public cargarSkill():void{ //void carga los datos, pero no los retorna
      this.serviSkill.verSkills().subscribe(data => {this.skills=data});
    }


      //METODO PARA ELIMINAR LOS DATOS EN EXPERIENCIA
  skillSeleccionada: number | undefined;
  // función para eliminar la experiencia seleccionada
delete(id: number | undefined) {
  // si no se seleccionó ninguna experiencia, mostrar un mensaje de alerta
  if (id === undefined) {  //!id
    alert("Debe seleccionar un skill para eliminar.");
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
  this.serviSkill.eliminarSkill(id).subscribe(data=>{alert("Skill eliminada")
  window.location.reload();
}, err => {
  alert ("skill eliminada correctamente");
  window.location.reload();
});


}

}
