"use client";
import { useState } from "react";
import bzCardStore from "@/staores";
import { putUser } from "@/services/user.services";

export const useUpdate = () => {
    const { token } = bzCardStore.getState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //const [updateAccount, setUpdateAccount] = useState<any>([]);

  const updateUser = async (id: any, body: any, ) => {
    setIsLoading(true);
    console.log('TOKEN', token)
    try {
      await putUser(id, body, token)
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
