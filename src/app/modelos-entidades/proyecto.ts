export class Proyecto {
    id?: number;
    titulo: string;
    imagen: string;
    link: string;
    descripcion: string;


    constructor (titulo: string, imagen: string, link: string, descripcion: string) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.link = link;
        this.descripcion = descripcion;
    }
}
