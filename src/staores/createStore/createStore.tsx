import { getAuthStore } from "../auth/auth.store";
import { getUserIdStore } from "../userId/userId.store";

export const bzCardStore = {
    ...getAuthStore(),
    ...getUserIdStore()
}
