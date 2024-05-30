import { API_URL } from "@/config/env.config"
import axios from "axios"

export const login = async (req: any) => {
    const resp: any = await axios.post(API_URL.LOGIN, req)
    return resp
  }