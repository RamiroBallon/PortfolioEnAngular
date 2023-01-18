import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
    //esto es para traer distintos datos arrays
    habilidades  : any = []; //esto es un array
    nombre: string = ''; //esto es un dato simple
    constructor(private datos:DatosService) { } //datos es un alias, lo ponemos como queramos

    ngOnInit(): void { //void trae los datos
      this.datos.getDatos().subscribe(data => {
        this.habilidades = data.skills; //2do experiencia es del json
      })
    }

}
