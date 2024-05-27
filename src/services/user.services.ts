import { API_URL } from "@/config/env.config";
import { User } from "@/models/user.model";
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

