export const URL_BASE= "https://guilsoft.com/";
export const URL_SERVER="https://us-central1-gs-biscards-backend.cloudfunctions.net/api";

export const API_URL = {
    LOGIN:URL_SERVER + "/auth",
    SEARCH: URL_SERVER + "/search",
    GET_USERS: URL_SERVER + "/account/get-all-accounts",
    CREATE_USER: URL_SERVER + "/users/create-user",
    GET_USER_BY_USERID: URL_SERVER + "/users/get-user-by-userid",
    CREATE_ACCOUNT_FREE: URL_SERVER + "/account/create-account-free",
    UPDATE_ACCOUNT: URL_SERVER + "/account/update-account/:id"
}
