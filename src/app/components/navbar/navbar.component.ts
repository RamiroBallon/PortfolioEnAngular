// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent {

// }



import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos-entidades/persona'; 
import { PersonaService } from 'src/app/services/persona.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  persona: Persona[] = [];
  modoEdit: any;

  constructor( private personaService: PersonaService) { }

  ngOnInit(): void {
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
cerrarSesion(){
  sessionStorage.setItem('currentUser', "null");
  this.modoEdit = false;
  alert("sesion cerrada");
  window.location.reload();
  return this.modoEdit;
}
}
