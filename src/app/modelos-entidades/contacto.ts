export class Contacto {

    id?: number;
    email: string;
    celular: string;

    //constructor con parametros
    constructor (email: string, celular: string) {
        this.email = email;
        this.celular = celular;
    }
}
