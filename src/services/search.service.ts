import { API_URL } from "@/config/env.config";
import axios from "axios";

export const searchUsers= async (data:any)=>{
    console.log('Datos service:', data)
    try{
        const response= await axios.post(API_URL.SEARCH, data)
        const { results } = response.data; 
        console.log('Respuesta del servidor:', results);
        return results; 
    } catch(error){
        console.error('Error al enviar la solicitud:', error);
        throw error;
    }
}