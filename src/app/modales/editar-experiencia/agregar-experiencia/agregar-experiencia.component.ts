import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/modelos-entidades/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {
  
  form: FormGroup; //usamos form para usar FormGroup, instanciamos una variable
  id!:number;
  nombre_empresa : string='';
  logo : string='';
  link: string='';
  puesto: string='';
  fecha_inicio : string='';
  fecha_fin : string='';
  descripcion : string='';

  // id: number= 1;  esto solo ti tenes relaciones entre tablas
  
  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private sExperiencia: ExperienciaService){  //formBuilder es un alias
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      nombre_empresa:['',[Validators.required]],
      logo:[''],
      link:[''],
      puesto:[''],
      fecha_inicio:[''],
      fecha_fin:[''],
      descripcion:['',[Validators.required]],
      
   })
  }

  ngOnInit(): void{
  }
//son metodos para el formulario
//toma el dato
//declarar para las validaciones 
  get Nombre_empresa(){
    return this.form.get("nombre_empresa");
  }
  get Logo(){
    return this.form.get("logo");
  }
  get Fecha_inicio(){
    return this.form.get("fecha_inicio");
  }
  get Fecha_fin(){
    return this.form.get("fecha_fin");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
  get Link(){
    return this.form.get("link");
  }
  get Puesto(){
    return this.form.get("puesto");
  }
 //las validaciones
  //metodo de validacion
  get Nombre_empresaValid(){
    return this.Nombre_empresa?.touched && !this.Nombre_empresa?.valid;
  }
  get LogoValid(){
    return this.Logo?.touched && !this.Logo?.valid;
  }
  get Fecha_inicioValid(){
    return this.Fecha_inicio?.touched && !this.Fecha_inicio?.valid;
  }
  get Fecha_finValid(){
    return this.Fecha_fin?.touched && !this.Fecha_fin?.valid;
  }
  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
  get LinkValid(){
    return this.Link?.touched && !this.Link?.valid;
  }
  get PuestoValid(){
    return this.Puesto?.touched && !this.Puesto?.valid;
  }

  funcionAgregarExperiencia(): void{
    const expe = new Experiencia(this.nombre_empresa, this.logo, this.link, this.puesto, this.fecha_inicio, this.fecha_fin, this.descripcion );
    this.sExperiencia.agregarExperiencia(expe).subscribe(data=>{
    alert("Experiencia Agregada");
    window.location.reload();
  }, err => {
    alert("experiencia agregada exitosamente");
    window.location.reload();
    // this.form.reset();
  });
  // this.form.value.nombre_empresa
}



//limpia los datos ingresados al cerrar la ventana
limpiar(): void{
  this.form.reset();
}

onEnviar(event:Event){
  event.preventDefault;
  if (this.form.valid){
    this.funcionAgregarExperiencia();
  } else {
    alert("falló en la carga, vuelva a intentar");
    this.form.markAllAsTouched();
  }
}

}






























// funcionExperiencia(event: Event){
//   // Detenemos la propagación o ejecución del compotamiento submit de un form
//   event.preventDefault; 

//   if (this.form.valid){
//     // Llamamos a nuestro servicio para enviar los datos al servidor
//     // También podríamos ejecutar alguna lógica extra
//     alert("Experiencia agregada")
//   }else{
//     // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
//     this.form.markAllAsTouched(); 
//   }

// }
