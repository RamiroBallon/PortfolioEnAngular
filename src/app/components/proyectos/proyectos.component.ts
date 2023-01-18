import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
   //esto es para traer distintos datos arrays
   projects  : any = []; //esto es un array
   nombre: string = ''; //esto es un dato simple
   constructor(private datos:DatosService) { } //datos es un alias, lo ponemos como queramos
 
   ngOnInit(): void { //void trae los datos
     this.datos.getDatos().subscribe(data => {
       this.projects = data.proyectos; //2do experiencia es del json
     })
   }

}
