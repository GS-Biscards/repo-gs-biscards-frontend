    import { create } from "zustand";
    import { persist } from "zustand/middleware";
    import {UserIdType} from "./userId.type";
    import bzCardStore from "@/stores";
    import { getUserId } from "@/services/user.services";

    const userIdStore = create(
        persist<UserIdType>(
        (set) => ({
            user: null,
            getUser: async (id: string) => {
            try {
                const user = await getUserId(id);
                set(() => ({ user }));
                return true;
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
                return false;
            }
            },
        }),
        { name: 'user' }
        )
    );
    
    export const getUserIdStore = () => userIdStore;