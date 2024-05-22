import { API_URL } from "@/config/env.config";
import axios from "axios";


export const getUserId = async (req: any) => {
  const { userId } = req;

  if (userId) {
    try {
      const user: any = await axios.post(API_URL.GET_USER_BY_USERID, { userId: userId })
      if (user) {
        return user.data
      }
    } catch (error) {
      return null
    }
  } else {
    return null
  }
}
export const createUser = async (req: any) => {
  try {
    const resp: any = await axios.post(API_URL.CREATE_USER, req)
    if (resp) {
        console.log ("ir al dashboard del cliente", resp.data) 
        return 
    }
    } catch (error) {
        console.log ("error no ingreso ")
        return 
    }
}

