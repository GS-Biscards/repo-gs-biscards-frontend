import { API_URL } from "@/config/env.config";
import { User } from "@/models/user.model";
import axios from "axios";

export const getProfessions = async () => {
  try {
    const professions: any = await axios.get(API_URL.GET_PROFESSIONS)
    if (professions) {
      return professions.data.profession
    }
  } catch (error) {
    return null
  }
}