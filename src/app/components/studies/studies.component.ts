import { Component, OnInit} from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit{

    //esto es para traer distintos datos arrays
    estudios: any = []; //esto es un array
    nombre: string = ''; //esto es un dato simple
    constructor(private datos:DatosService) { } //datos es un alias, lo ponemos como queramos
  
    ngOnInit(): void { //void trae los datos
      this.datos.getDatos().subscribe(data => {
        this.estudios = data.educacion; //2do experiencia es del json
      })
    }
  
  }
