import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos-entidades/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { AutentificacionService } from 'src/app/services/autentificacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

// export class HeaderComponent implements OnInit{
//    esto es para traer distintos datos arrays
//    personas : Persona []=[]; esto es un array
//    constructor(private serviPersona:PersonaService) { } datos es un alias, lo ponemos como queramos
 
//    ngOnInit(): void { void trae los datos
//      this.cargarPersona();
//     }

//     METODO PARA CARGAR LOS DATOS EN LA PAGINA
//     public cargarPersona():void{ void carga los datos, pero no los retorna
//       this.serviPersona.verPersonas().subscribe(data => {this.personas=data});
//     }

//   }
  
export class HeaderComponent implements OnInit{
  //esto es para traer distintos datos arrays
  personas : Persona []=[]; //esto es un array
  modoEdit: any;
  estaLogeado: boolean = false;
  
  constructor(private serviPersona:PersonaService, private autService: AutentificacionService) { } //datos es un alias, lo ponemos como queramos

  ngOnInit(): void { //void trae los datos
    this.cargarPersona();
    console.log(this.modoEdit) 
   }

   //METODO PARA CARGAR LOS DATOS EN LA PAGINA
   public cargarPersona():void{ //void carga los datos, pero no los retorna
     this.serviPersona.verPersonas().subscribe(data => {this.personas=data});

     if (sessionStorage.getItem('currentUser') == "null"){
      this.modoEdit = false;
    }else if (sessionStorage.getItem('currentUser') == null){
      this.modoEdit = false;
    }else {
      this.modoEdit = true;
    }
   }

 }


// export class HeaderComponent implements OnInit {

//   personas: Persona= new Persona("","", "", "","", "", "", "", "","","");
//   modoEdit: any;

//   constructor(private serviPersona:PersonaService, private autService: AutentificacionService) { }

//   ngOnInit(): void {
//     this.serviPersona.verPersonas().subscribe(data => {this.personas = data;});
    
//     if (sessionStorage.getItem('currentUser') == "null"){
//       this.modoEdit = false;
//     }else if (sessionStorage.getItem('currentUser') == null){
//       this.modoEdit = false;
//     }else {
//       this.modoEdit = true;
//     }
//   }

//   }
