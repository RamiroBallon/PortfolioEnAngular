import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos-entidades/persona';

@Component({
  selector: 'app-modal-login1',
  templateUrl: './modal-login1.component.html',
  styleUrls: ['./modal-login1.component.css']
})

export class ModalLogin1Component implements OnInit {
  form: FormGroup;
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "", "");

  constructor(private ruta: Router, private formBuilder: FormBuilder, private autService: AutentificacionService) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        clave:['',[Validators.required,Validators.minLength(8)]],
      })
   }

  ngOnInit(): void {
  }

get Email(){
   return this.form.get('email');
  }

get Clave(){
  return this.form.get('clave');
}
onEnviar(event: Event){
  event.preventDefault;
  if (this.form.valid){
  this.autService.loginPersona(JSON.stringify(this.form.value)).subscribe(data =>
    {
      console.log("DATA: " + JSON.stringify(data));
      window.location.reload();  //this.ruta.navigate(['/dashboard'])
    }, error =>{
      alert("error al iniciar sesion")
    })
    //this.ruta.navigate([''])
  }  else {
    alert("Hay un error en el formulario")
  }
 
}
}

