export interface ResUserFree {
    userId: string,
    nombre: string,
    imageProfile: {profileImg: string},
    profession: string,
}

export interface UpdUserFree {
    idTemplate?:string
    profileImg:string
    firstName:string
    lastName:string;
    email?:string;
    phoneNumber:string;
    history:string

    //acerca de mi
    typeUser?:string;
    idProfession:string;
    profession: string;
    rol_cargo:string;
    rubro:string
    servicio_comercio:string;
    documentPdf:string

    //Direccion
    country:string;
    province:string;
    locality:string;
    street: string,
    number:string;

    //socialMedia: SocialMedia
    facebookUrl:string;
    instagramUrl:string;
    linkedinUrl:string;
}