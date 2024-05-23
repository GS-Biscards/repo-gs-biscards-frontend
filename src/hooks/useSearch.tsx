"use client";
import { searchUsers } from "@/services/search.service";
import { useEffect, useState } from "react";

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accountSearch, setAccountSearch] = useState<any | null>(null);

  const searchUser = async (body: any) => {
    setIsLoading(true);
    try {
      const users = await searchUsers(body);
      setAccountSearch(users);
      console.log('en el search', accountSearch)
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
/*   useEffect(() => {
    searchUser()
  }, []); */

  return {
    isLoading,
    accountSearch,
    searchUser,
  };
};
