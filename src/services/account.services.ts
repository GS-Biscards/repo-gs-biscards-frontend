import { API_URL } from "@/config/env.config";
import axios from "axios";


export const createAccountFree = async (req: any) => {

        try {
            const resp: any = await axios.post(API_URL.CREATE_ACCOUNT_FREE, req)
        if (resp) {
            console.log ("ir al dashboard del cliente", resp.data.token) 
            return resp.data 
        }
        } catch (error) {
            console.log ("error no ingreso ")
            return 
        }
}
