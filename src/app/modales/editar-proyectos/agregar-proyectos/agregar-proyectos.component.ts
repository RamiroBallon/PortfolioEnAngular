import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/modelos-entidades/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-agregar-proyectos',
  templateUrl: './agregar-proyectos.component.html',
  styleUrls: ['./agregar-proyectos.component.css']
})
export class AgregarProyectosComponent implements OnInit {
  form: FormGroup; //usamos form para usar FormGroup, instanciamos una variable
  id?: number;
  titulo: string='';
  imagen: string='';
  link: string='';
  descripcion: string='';




  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private sProyecto: ProyectoService){  //formBuilder es un alias
    ///Creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      titulo:['',[Validators.required]],
      imagen:['',[Validators.required]],
      link:[''],
      descripcion:[''],
   })
  }

  ngOnInit(): void{

  }
//son metodos para el formulario

  get Titulo(){
    return this.form.get("titulo");
  }
  get Link(){
    return this.form.get("link");
  }
  get Imagen(){
    return this.form.get("imagen");
  }
  get Descripcion(){
    return this.form.get("descripcion");
  }
 
  //metodo de validacion
  get TituloValid(){
    return this.Titulo?.touched && !this.Titulo?.valid;
  }
  get LinkValid(){
    return this.Link?.touched && !this.Link?.valid;
  }
  get ImagenValid(){
    return this.Imagen?.touched && !this.Imagen?.valid;
  }
  get DescripcionValid(){
    return this.Descripcion?.touched && !this.Descripcion?.valid;
  }
 

  funcionAgregarProyecto(): void{
    const proyect = new Proyecto(this.titulo, this.imagen, this.link, this.descripcion);
    this.sProyecto.agregarProyecto(proyect).subscribe(data=>{
    alert("Proyecto Agregado");
    window.location.reload();
  }, err => {
    alert("Proyecto agregado exitosamente");
    window.location.reload();
    // this.form.reset();
  });
}
  
//limpia los datos ingresados al cerrar la ventana
limpiar(): void{
  this.form.reset();
}

onEnviar(event:Event){
  event.preventDefault;
  if (this.form.valid){
    this.funcionAgregarProyecto();
  } else {
    alert("falló en la carga, vuelva a intentar");
    this.form.markAllAsTouched();
  }
}

}


