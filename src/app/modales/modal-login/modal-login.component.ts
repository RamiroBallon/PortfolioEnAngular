//HACIENDO FORMULARIOS REACTIVOS
import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  formLogin: FormGroup; //usamos form para usar FormGroup, instanciamos una variable

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder){  //formBuilder es un alias
    ///Creamos el grupo de controles para el formulario de login
    this.formLogin= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit() {}
//son metodos para el formulario
//toma esl dato del password
  get Password(){
    return this.formLogin.get("password");
  }
 //toma el dato del email
  get Mail(){
   return this.formLogin.get("email");
  }
  //metodo de validacion del password
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  //metodo de validacion del password
  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }
 

  funcionLogin(event: Event){
    // Detenemos la propagación o ejecución del comportamiento submit de un form
    event.preventDefault; 
 
    if (this.formLogin.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Bienvenido!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.formLogin.markAllAsTouched();//marcar todo como tocado
    }
 
  }


}
