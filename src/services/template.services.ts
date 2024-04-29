import { API_URL } from "@/config/env.config";
import axios from "axios";


export const getTemplateList = async () => {
    try {
        const templateList: any = await axios.get(API_URL.GET_TEMPLATE)
        if (templateList) {
            return templateList.data
        } else{
            return []
        }
    } catch (error) {
        return null
    }
}
