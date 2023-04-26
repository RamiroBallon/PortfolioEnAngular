import { Component, OnInit } from '@angular/core';
//importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/modelos-entidades/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-agregar-skills',
  templateUrl: './agregar-skills.component.html',
  styleUrls: ['./agregar-skills.component.css']
})
export class AgregarSkillsComponent implements OnInit {
  form: FormGroup; //usamos form para usar FormGroup, instanciamos una variable
  id?: number;
  logo: string='';
  porcentaje: number=0;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private sSkill: SkillService){  //formBuilder es un alias
    ///Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      logo:['',[Validators.required]],
      porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]],
   })
  }

  ngOnInit() {}
//son metodos para el formulario
//toma el dato 
  get Logo(){
    return this.form.get("logo");
  }
  get Porcentaje(){
    return this.form.get("porcentaje");
  }

  //metodo de validacion
  get LogoValid(){
    return this.Logo?.touched && !this.Logo?.valid;
  }
  get PorcentajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje?.valid;
  }
 

  funcionAgregarSkill(): void{
    const skil = new Skill(this.logo, this.porcentaje);
    this.sSkill.agregarSkill(skil).subscribe(data=>{
    alert("Skill Agregada");
    window.location.reload();
  }, err => {
    alert("Skill agregada exitosamente");
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
    this.funcionAgregarSkill();
  } else {
    alert("falló en la carga, vuelva a intentar");
    this.form.markAllAsTouched();
  }
}
}
