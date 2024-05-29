import { API_URL } from "@/config/env.config";
import { User } from "@/models/user.model";
import axios from "axios";

export const getUsers = async () => {
  try {
    const user: any = await axios.get(API_URL.GET_USERS)
    if (user) {
      return user.data
    }
  } catch (error) {
    return null
  }
}

export const putUser = async (data:any, token: any)=>{
  try{
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const user: any = await axios.put('API_URL.UPDATE_ACCOUNT', data)
      console.log('Respuesta del servidor:', user.status);
      return user.data
  } catch(error){
      console.error('Error al enviar la solicitud:', error);
      throw error;
  }
}

export const getUserId = async (req: any) => {
  try {
      const response: any = await axios.get(`${API_URL.GET_USER_BY_USERID}/${req}`)
      console.log('Respuesta del servidor:', response.data.data);
      if (response.data && response.data.status && response.data.data) {
        return response.data.data; 
      } else {
        console.error('La respuesta no tiene los datos esperados:', response.data);
        return null;
      }
    } catch (error) {
      return null
    }
}

export const searchUsersByValue = async (value: string): Promise<User[]> => {
  try {
    const users: any = await axios.post(API_URL.GET_USERS, value)
    const result: User[] = [];
    for (let i = 0; i < 5; i++) {
      result.push(...users.data);
    }
    return result;

  } catch (error) {
    return []
  }

}

export const createUser = async (req: any) => {
  const resp: any = await axios.post(API_URL.CREATE_USER, req)
  return resp.data;
}

