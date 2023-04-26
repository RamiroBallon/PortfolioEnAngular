import { Component } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  form: FormGroup; //usamos form para usar FormGroup, instanciamos una variable

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){  //formBuilder es un alias
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      mensaje:['',[Validators.required]],
   })
  }

  ngOnInit() {}
//son metodos para el formulario
//toma el dato 
  get Nombre(){
    return this.form.get("nombre");
  }
  get Email(){
    return this.form.get("email");
  }
  get Mensaje(){
    return this.form.get("mensaje");
  }
 
  //metodo de validacion
  get NombreValid(){
    return this.Nombre?.touched && !this.Nombre?.valid;
  }
  get EmailValid(){
    return this.Email?.touched && !this.Email?.valid;
  }
  get MensajeValid(){
    return this.Mensaje?.touched && !this.Mensaje?.valid;
  }
 

  funcionContactar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Mensaje enviado")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }

}
