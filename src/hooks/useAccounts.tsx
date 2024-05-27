'use client'
import { getUsers } from "@/services/user.services";
import { useEffect, useState } from "react";

export function useAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    setIsLoading(true);
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
