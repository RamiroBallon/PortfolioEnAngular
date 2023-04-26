import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/modelos-entidades/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-editar-sobremi',
  templateUrl: './editar-sobremi.component.html',
  styleUrls: ['./editar-sobremi.component.css']
})
export class EditarSobremiComponent implements OnInit {

  formEditarHeader: FormGroup; //usamos form para usar FormGroup, instanciamos una variable
  id?: number;
  nombre: string='';
  apellido: string='';
  foto_perfil: string='';
  link_foto_perfil: string='';
  titulo_especialidad: string='';
  descripcion_1_sobre_mi: string='';
  descripcion_2_sobre_mi: string='';
  imagen_banner: string='';
  titulo_banner: string='';

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){  //formBuilder es un alias
    ///Creamos el grupo de controles para el formulario de login
    this.formEditarHeader= this.formBuilder.group({
      nombre: ['',[Validators.required, Validators.email]],
      apellido: ['',[Validators.required, Validators.email]],
      foto_perfil: ['',[]],
      link_foto_perfil: ['',[]],
      titulo_especialidad: ['',[]],
      descripcion_1_sobre_mi: ['',[]],
      descripcion_2_sobre_mi: ['',[]],
      imagen_banner: ['',[]],
      titulo_banner: ['',[]],
   })
  }

  ngOnInit() {}
//son metodos para el formulario
//toma esl dato del password

  get Nombre(){
    return this.formEditarHeader.get("nombre");
  }
 //toma el dato del email
  get Apellido(){
   return this.formEditarHeader.get("apellido");
  }
  get Foto_perfil(){
    return this.formEditarHeader.get("foto_perfil");
  }
 //toma el dato del email
  get Link_foto_perfil(){
   return this.formEditarHeader.get("link_foto_perfil");
  }
  get Titulo_especialidad(){
    return this.formEditarHeader.get("titulo_especialidad");
  }
 //toma el dato del email
  get Descripcion_1_sobre_mi(){
   return this.formEditarHeader.get("descripcion_1_sobre_mi");
  }
  get Descripcion_2_sobre_mi(){
    return this.formEditarHeader.get("descripcion_2_sobre_mi");
  }
 //toma el dato del email
  get Imagen_banner(){
   return this.formEditarHeader.get("imagen_banner");
  }
  get Titulo_banner(){
    return this.formEditarHeader.get("titulo_banner");
   }

  //metodo de validacion del password
  get NombreValid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }
  //metodo de validacion del password
  get ApellidoValid() {
    return this.Apellido?.touched && !this.Apellido?.valid;
  }
  get Foto_perfilValid(){
    return this.Foto_perfil?.touched && !this.Foto_perfil?.valid;
  }
  //metodo de validacion del password
  get Link_foto_perfilValid() {
    return this.Link_foto_perfil?.touched && !this.Link_foto_perfil?.valid;
  }
  get Titulo_especialidadValid(){
    return this.Titulo_especialidad?.touched && !this.Titulo_especialidad?.valid;
  }
  //metodo de validacion del password
  get Descripcion_1_sobre_miValid() {
    return this.Descripcion_1_sobre_mi?.touched && !this.Descripcion_1_sobre_mi?.valid;
  }

  get Descripcion_2_sobre_miValid() {
    return this.Descripcion_2_sobre_mi?.touched && !this.Descripcion_2_sobre_mi?.valid;
  }
  get Imagen_bannerValid(){
    return this.Imagen_banner?.touched && !this.Imagen_banner?.valid;
  }
  //metodo de validacion del password
  get Titulo_bannerValid() {
    return this.Titulo_banner?.touched && !this.Titulo_banner?.valid;
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.formEditarHeader.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formulario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formEditarHeader.markAllAsTouched(); 
    }
 
  }

}
