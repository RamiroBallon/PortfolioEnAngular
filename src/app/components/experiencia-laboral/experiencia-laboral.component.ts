import { Component, OnInit } from '@angular/core';
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

}
