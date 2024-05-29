import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthType } from "./auth.type";
import { login } from "@/services/auth.services";

const authStore = create (
    persist<AuthType>(
        (set) => ({
            token: '',
            setToken: async ( reqLogin: any) => {
                try {                    
                    const resp = await login(reqLogin);
                    set(() => ( { token : resp.data.token}));
                    return true
                } catch (error) {
                    return false
                }
            }
        }),{name: 'token'}
    )
)

export const getAuthStore = () => {
    return (
        authStore
    )
}