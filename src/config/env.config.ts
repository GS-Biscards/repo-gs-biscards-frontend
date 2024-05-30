export const URL_BASE= "https://guilsoft.com/";
export const URL_SERVER="https://us-central1-gs-biscards-backend.cloudfunctions.net/api";

export const API_URL = {
    LOGIN:URL_SERVER + "/auth",
    SEARCH: URL_SERVER + "/search",
    GET_USERS: URL_SERVER + "/account/get-all-accounts",
    CREATE_USER: URL_SERVER + "/user/create-user",
    GET_USER_BY_USERID: URL_SERVER + "/users/get-user-by-userid",
    CREATE_ACCOUNT_FREE: URL_SERVER + "/account/create-account-free",
    GET_PROFESSIONS:URL_SERVER+"/professions/get-professions",
    GET_SERVICES:URL_SERVER+"/professions/get-services",
    GET_COMMERCES:URL_SERVER+"/professions/get-commerces",
    SEARCH_PROFESSIONS:URL_SERVER+"/professions/search-professions",
    ADD_PROFESSION:URL_SERVER+"/professions/create-profession",
    UPDATE_PROFESSION:URL_SERVER+"/professions/update-profession",
    DELETE_PROFESSION:URL_SERVER+"/professions/delete-profession",
    ADD_SERVICE:URL_SERVER+"/professions/create-service",
    UPDATE_SERVICE:URL_SERVER+"/professions/update-service",
    DELETE_SERVICE:URL_SERVER+"/professions/delete-service",
    ADD_COMMERCE:URL_SERVER+"/professions/create-commerce",
    UPDATE_COMMERCE:URL_SERVER+"/professions/update-commerce",
    DELETE_COMMERCE:URL_SERVER+"/professions/delete-commerce",
}
