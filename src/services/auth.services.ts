import { API_URL } from "@/config/env.config";
import axios from "axios";


export const login = async (req: any) => {

        try {
        const resp: any = await axios.post(API_URL.LOGIN, req)
        if (resp) {
            console.log ("ir al dashboard del cliente", resp.data.token) 
            return 
        }
        } catch (error) {
            console.log ("error no ingreso ")
            return 
        }
}
