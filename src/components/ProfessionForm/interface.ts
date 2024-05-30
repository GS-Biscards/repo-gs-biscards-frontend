export interface Item{
    state:ProfessionState | string
    text:string
}

export enum ProfessionType {
    PROFESSION="PROFESSION",
    COMMERCE="COMMERCE",
    SERVICE="SERVICE"
}
export enum ProfessionState {
    ACTIVE="ACTIVE",
    DELETED="DELETED"
}

export interface Profession {
    id:string,
    name: string,
    type: ProfessionType,
    description: string,
    state: ProfessionState
}

export interface BackendResponse {
    status:boolean
    professions?:Profession[]
    profession?:Profession
    message?:string
}