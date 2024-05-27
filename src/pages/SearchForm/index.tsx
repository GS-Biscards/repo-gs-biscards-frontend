"use client";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import UserList from "./UsersList";
import { useAccounts } from "@/hooks/useAccounts";
import { URL_BASE } from "@/config/env.config";
import { useSearch } from "@/hooks/useSearch";
import Header from "@/components/CurriculumTemplate/Header";

const SearchForm = () => {
  const { accounts, isLoading } = useAccounts();
  const [users, setUser] = useState(accounts);
  const { accountSearch} = useSearch();

  console.log('-----users:', accountSearch)
  useEffect(()=>{
    console.log('datos filtrados', accountSearch)
    if(accountSearch && accountSearch.length > 0){
      setUser(accountSearch)
      console.log('datos de la busqueda ', accountSearch)
    }else{
      setUser(accounts)
    }
    
  },[accountSearch, accounts])

  return (
    <div className="h-full w-full">
      <Header  />
      <Search />
      <div className="px-[62px] py-10 pb-12 h-full">
        {isLoading ? (
          <p>cargando...</p>
        ) : (
          <div className="flex flex-wrap justify-center">
            {users?.map((user: any, index: number) => {
              return (
                //<UserList key={`landing-user-card-${index}`} user={user} />
                <a
                  href={`${URL_BASE}/sofia-salas-soler`}
                  key={`landing-user-card-${index}`}
                >
                  <UserList user={user} />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;


