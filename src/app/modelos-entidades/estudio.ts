export class Estudio {
    id?: number;
    titulo_especialidad: string;
    institucion: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    imagen: string;

    constructor(titulo_especialidad: string, institucion: string, fecha_inicio: string, fecha_fin: string, descripcion: string, imagen: string) {
        this.titulo_especialidad = titulo_especialidad;
        this.institucion = institucion;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
