export const URL_GDRIVE="https://drive.google.com/uc?export=view&id="
export const URL_SERVER="https://us-central1-gs-biscards-backend.cloudfunctions.net/api"

export const API_URL = {
    LOGIN:URL_SERVER + "/auth",
    SIGNUP:URL_SERVER + "/users/create-user",
    RESET_PASS:URL_SERVER + "/users/request-password-recovery",
    RECOVER_PASS:URL_SERVER + "/users/recover-password",
    GET_USERS: URL_SERVER + "/users/get-user",
    CREATE_USER: URL_SERVER + "/user/create-user",
    GET_USER_BY_USERID: URL_SERVER + "/users/get-user-by-userid"
    
}