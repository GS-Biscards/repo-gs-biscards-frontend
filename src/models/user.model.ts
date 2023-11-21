export interface User {
    id: string,
    userId: string,
    userType: string,
    template: string,
    firstName: string,
    lastName: string,
    birth: string,
    personalPhone: string,
    workPhone: string,
    extraPhone: string,
    email: string,
    address: string,
    numberAddress: string,
    locality: string,
    province: string,
    country: string,
    description: string
    histoy: string,
    profileImg: string,
    histoyImg: string,
    galleryImg: urlImg[],
    contactImg: string,
    downloadFile: string,
}

export interface urlImg {
    url: string
}
