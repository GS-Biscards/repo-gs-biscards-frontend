import { useState } from "react";

export interface AuthType {
    token: string,
    setToken: (reqLogin: any) => Promise<boolean>;
}