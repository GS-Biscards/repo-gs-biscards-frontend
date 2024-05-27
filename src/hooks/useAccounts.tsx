'use client'
import { getUsers } from "@/services/user.services";
import bzCardStore from "@/staores";
import { useEffect, useState } from "react";

export function useAccounts() {
  const { token } = bzCardStore.getState();
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    console.log('TOKEN', token)
    try {
      const data = await getUsers();
      setAccounts(data);
      console.log('datos', data)
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return {
    accounts,
    isLoading
  };
}
