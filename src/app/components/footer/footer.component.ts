import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
   //esto es para traer distintos datos arrays
   redes : any = []; //esto es un array
   nombre: string = ''; //esto es un dato simple
   constructor(private datos:DatosService) { } //datos es un alias, lo ponemos como queramos
 
   ngOnInit(): void { //void trae los datos
     this.datos.getDatos().subscribe(data => {
       this.redes = data.contacto; //2do experiencia es del json
     })
   }

}
