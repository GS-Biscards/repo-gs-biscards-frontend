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

export const SignUp = async (req: any) => {
  const { email,password} = req;
    try {
      const user: any = await axios.post(API_URL.SIGNUP, { email, password })
      console.log("usuario creado",user.data)
    } catch (error) {
      return null
    }
}
export const resetPass = async (req: any) => {
  const { email} = req;
    try {
      const user: any = await axios.post(API_URL.RESET_PASS, { email})
      console.log("email del usuario: ",user.data)
    } catch (error) {
      return null
    }
}
export const recoverPass = async (req: any) => {
  const { email,password} = req;
    try {
      console.log("que pasa:",req)
      const user: any = await axios.put(API_URL.RECOVER_PASS,  req )
     
      console.log("email del usuario: ",user.data)
    } catch (error) {
      console.log("errorrrrrrrrr:",error)
      return null
    }
}