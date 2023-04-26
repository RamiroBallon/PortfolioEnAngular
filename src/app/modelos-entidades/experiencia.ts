export class Experiencia {
    id?: number;
    nombre_empresa: string;
    logo: string;
    link: string;
    puesto: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    
    //constructor con parametros
    constructor(nombre_empresa: string , logo: string, link: string, puesto: string, fecha_inicio: string, fecha_fin: string, descripcion: string) { 
        this.nombre_empresa = nombre_empresa;
        this.logo = logo;
        this.link = link;
        this.puesto = puesto;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
        }
}
