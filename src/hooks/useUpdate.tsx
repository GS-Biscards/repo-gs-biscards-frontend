"use client";
import { useState } from "react";
import bzCardStore from "@/staores";
import { putUser } from "@/services/user.services";
import { getAuthStore } from "@/staores/auth/auth.store";

export const useUpdate = () => {
  const { token } = getAuthStore().getState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //const [updateAccount, setUpdateAccount] = useState<any>([]);

  const updateUser = async ( body: any, ) => {
    setIsLoading(true);
    console.log('TOKEN', token)
    try {
      await putUser(body, token)
      //setUpdateAccount(users);
      //console.log('en el search', updateAccount)
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    updateUser,
  };
};
