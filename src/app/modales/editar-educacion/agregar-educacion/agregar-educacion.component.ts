import { Component } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudio } from 'src/app/modelos-entidades/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent {
  form: FormGroup; //usamos form para usar FormGroup, instanciamos una variable
  id?: number;
  titulo_especialidad: string='';
  institucion: string='';
  fecha_inicio: string='';
  fecha_fin: string='';
  descripcion: string='';
  imagen: string='';

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private sEstudio: EstudioService){  //formBuilder es un alias
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      titulo_especialidad:['',[Validators.required]],
      institucion:['',[Validators.required]],
      fecha_inicio:['',[Validators.required]],
      fecha_fin:[''],
      descripcion:[''],
      imagen:[''],
   })
  }

  ngOnInit() {}
//son metodos para el formulario
//toma el dato 
  get Titulo_especialidad(){
    return this.form.get("titulo");
  }
  get Institucion(){
    return this.form.get("institucion");
  }
  get Imagen(){
    return this.form.get("imagen");
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
 
  //metodo de validacion
  get Titulo_especialidadValid(){
    return this.Titulo_especialidad?.touched && !this.Titulo_especialidad?.valid;
  }
  get InstitucionValid(){
    return this.Institucion?.touched && !this.Institucion?.valid;
  }
  get ImagenValid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
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
 

  funcionExperiencia(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Educacion agregada")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }

  funcionAgregarEstudio(): void{
    const estudi = new Estudio(this.titulo_especialidad, this.institucion, this.fecha_inicio, this.fecha_fin, this.descripcion, this.imagen);
    this.sEstudio.agregarEstudio(estudi).subscribe(data=>{
    alert("Estudio Agregado");
    window.location.reload();
  }, err => {
    alert("estudio agregada exitosamente");
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
    this.funcionAgregarEstudio();
  } else {
    alert("falló en la carga, vuelva a intentar");
    this.form.markAllAsTouched();
  }
}
}
