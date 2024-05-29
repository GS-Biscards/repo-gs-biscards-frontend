'use client'
import { getProfessions } from "@/services/profession.service";
import { useEffect, useState } from "react";

export function useProfessions() {
  const [professions, setProfessions] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProfessions = async () => {
    setIsLoading(true);
    try {
      const data = await getProfessions();
      setProfessions(data);
    } catch (error) {
      console.error("Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfessions();
  }, []);
  return {
    professions,
    isLoading
  };
}
