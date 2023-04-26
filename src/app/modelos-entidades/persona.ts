//TRAEMOS LOS ATRIBUTOS
export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    foto_perfil: string;
    link_foto_perfil: string;
    titulo_especialidad: string;
    descripcion_1_sobre_mi: string;
    descripcion_2_sobre_mi: string;
    imagen_banner: string;
    titulo_banner: string;
    email: string;
    clave: string;


    //constructor con parametros(sin el id)
    constructor(nombre: string, apellido: string, foto_perfil: string, link_foto_perfil: string, titulo_especialidad: string, descripcion_1_sobre_mi: string, descripcion_2_sobre_mi: string, imagen_banner: string, titulo_banner: string, email: string, clave: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto_perfil = foto_perfil;
        this.link_foto_perfil = link_foto_perfil;
        this.titulo_especialidad = titulo_especialidad;
        this.descripcion_1_sobre_mi = descripcion_1_sobre_mi;
        this.descripcion_2_sobre_mi = descripcion_2_sobre_mi;
        this.imagen_banner = imagen_banner;
        this.titulo_banner = titulo_banner;
        this.email = email;
        this.clave = clave;
    }

}
