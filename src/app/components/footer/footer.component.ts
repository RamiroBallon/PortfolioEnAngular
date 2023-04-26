import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/modelos-entidades/contacto';
import { ContactoService } from 'src/app/services/contacto.service';
import { RedSocial } from 'src/app/modelos-entidades/red-social';
import { RedSocialService } from 'src/app/services/red-social.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
   //esto es para traer distintos datos arrays
   contactos : Contacto []=[]; //esto es un array
   redesSociales: RedSocial []=[]; 
  
   constructor(private serviContacto:ContactoService, private serviRedSocial:RedSocialService) { } //datos es un alias, lo ponemos como queramos
  
   ngOnInit(): void { //void trae los datos
     this.cargarContacto();
     this.cargarRedSocial();
   }

   public cargarContacto():void{ //void carga los datos, pero no los retorna
    this.serviContacto.verContactos().subscribe(data => {this.contactos=data});
  }

  public cargarRedSocial():void{ //void carga los datos, pero no los retorna
    this.serviRedSocial.verRedesSociales().subscribe(data => {this.redesSociales=data});
  }
   
}




// export class FooterComponent implements OnInit{
//   //esto es para traer distintos datos arrays
//   contactos : Contacto []=[]; //esto es un array
//   redesSociales: RedSocial []=[]; 
 
//   constructor(private serviContacto:ContactoService, private serviRedSocial:RedSocialService) { } //datos es un alias, lo ponemos como queramos
 
//   ngOnInit(): void { //void trae los datos
//     this.cargarContacto();
//     this.cargarRedSocial();
//   }

//   public cargarContacto():void{ //void carga los datos, pero no los retorna
//    this.serviContacto.verContactos().subscribe(data => {this.contactos=data});
//  }

//  public cargarRedSocial():void{ //void carga los datos, pero no los retorna
//    this.serviRedSocial.verRedesSociales().subscribe(data => {this.redesSociales=data});
//  }
  
// }
