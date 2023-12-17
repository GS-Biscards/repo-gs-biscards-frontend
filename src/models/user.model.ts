export interface User {
    id: string,
    userId: string,
    userType: string,
    template: string | null,
    firstName: string,
    lastName: string,
    birth: string,
    personalPhone: string,
    workPhone: string,
    extraPhone: string,
    email: string,
    address: Address,
    description: string
    histoy: string,
    accountImg: AccountImg,
    galleryImg: ImageUrl[],
    socialMedia: SocialMedia
}

export interface Address {
    street: string,
    number: string,
    locality: string,
    province: string,
    country: string,
    zipCode: string,
    latitude: string,
    longitud: string
}

export interface AccountImg {
    backgroundImg: string,
    contactImg: string,
    histoyImg: string,
    profileImg: string,
    downloadFile: string,
}

export interface ImageUrl {
    url: string
}

export interface SocialMedia {
    facebookUrl: string,
    instagramUrl: string,
    linkedInUsrl: string,
    telegramUrl: string,
    tikTokUrl: string,
    twitterUrl: string,
    youTubeUrl: string
}

export interface SuggestedUserId {
    existingUser: boolean,
    suggestedUserId: string[]
}

