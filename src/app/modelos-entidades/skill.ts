export class Skill {
    id?: number;
    logo: string;
    porcentaje: number;

    constructor (logo: string, porcentaje: number) {
        this.logo = logo;
        this.porcentaje = porcentaje;
    }
}
