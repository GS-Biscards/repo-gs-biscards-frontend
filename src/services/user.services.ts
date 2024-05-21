import { API_URL } from "@/config/env.config";
import axios from "axios";

export const getUsers = async () => {
  try {
    const user: any = await axios.get(API_URL.GET_USERS)
    console.log('datos del servidor', user.data)
    if (user) {
      return user.data
    }
  } catch (error) {
    return null
  }
}

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
