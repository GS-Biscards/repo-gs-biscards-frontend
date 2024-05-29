interface UserType {
    userId?:string
    idTemplate?:string
    //profileImg:file
    firstName?:string
    lastName?:string;
    email?:string;
    phoneNumbre?:string;
    history?:string
    //acerca de mi
    typeUser?:string;
    idProfession?:string;
    rol_cargo?:string;
    rubro?:string
    servicio_comercio?:string;
    //documentPdf:file
    //Direccion
    idAddress:string;
    country?:string;
    province?:string;
    locality?:string;
    street:string;
    number?:string;
    //socialMedia: SocialMedia
    facebookUrl?:string;
    instagramUrl?:string;
    linkedinUrl?:string;
}

export interface UserIdType {
  user: any;
  getUser: (id: string) => Promise<boolean>;
}
