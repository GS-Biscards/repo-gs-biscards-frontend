import { API_URL } from "@/config/env.config";
import axios, {AxiosResponse} from "axios";
import { Profession,BackendResponse } from "@/components/ProfessionForm/interface";

export const getProfessions=async () => {
	try {
		const resp: any = await axios.get(API_URL.GET_PROFESSIONS)
		console.log(resp)
		console.log('datos del servidor', resp.data)
		if (resp) {return resp.data}
	} catch (error) {return null}
}

export const searchProfessions=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.post(API_URL.SEARCH_PROFESSIONS,profession)
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,professions:resp.data.professions}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}

export const addProfession=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.post(API_URL.ADD_PROFESSION,profession)
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.profession}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}

export const updateProfession=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.put(API_URL.UPDATE_PROFESSION,profession)
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.profession}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}

export const deleteProfession=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.delete(API_URL.DELETE_PROFESSION,{data:profession})
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.profession}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}


export const addService=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.post(API_URL.ADD_SERVICE,profession)
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.service}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}

export const updateService=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.put(API_URL.UPDATE_SERVICE,profession)
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.service}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}

export const deleteService=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.delete(API_URL.DELETE_SERVICE,{data:profession})
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.service}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}

export const addCommerce=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.post(API_URL.ADD_COMMERCE,profession)
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.commerce}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}

export const updateCommerce=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.put(API_URL.UPDATE_COMMERCE,profession)
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.commerce}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}

export const deleteCommerce=async (profession:Partial<Profession>):Promise<BackendResponse> => {
	try {
		const resp: AxiosResponse = await axios.delete(API_URL.DELETE_COMMERCE,{data:profession})
		console.log('resp',resp)
		if (resp.status==200) {return {status:true,profession:resp.data.commerce}}
		return {status:false,message:"Estado desconocido."}
	} catch (error) {
		console.log("error",error)
		return {status:false,message:""+error}
	}
}