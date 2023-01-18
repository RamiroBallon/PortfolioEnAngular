import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
   //esto es para traer distintos datos arrays
   sobremis : any = []; //esto es un array
   nombre: string = ''; //esto es un dato simple
   constructor(private datos:DatosService) { } //datos es un alias, lo ponemos como queramos
 
   ngOnInit(): void { //void trae los datos
     this.datos.getDatos().subscribe(data => {
       this.sobremis = data.sobremi; //2do experiencia es del json
     })
   }
 
 }
 



