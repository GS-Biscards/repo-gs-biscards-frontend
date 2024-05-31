import { API_URL } from "@/config/env.config"
import axios from "axios"

export const getProfessions=async () => {
	try {
		const resp: any = await axios.get(API_URL.GET_PROFESSIONS)
		console.log(resp)
		console.log('datos del servidor', resp.data)
		if (resp) {return resp.data.profession}
	} catch (error) {return null}
}