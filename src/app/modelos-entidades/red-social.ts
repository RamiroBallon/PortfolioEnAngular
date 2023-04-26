export class RedSocial {
    id?: number;
    logo: string;
    link: string;
    title: string;

    constructor (logo: string, link: string, title: string) {
        this.logo = logo;
        this.link = link;
        this.title = title;
    }
}
