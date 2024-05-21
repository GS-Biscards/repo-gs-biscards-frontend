'use client'
import React from "react";
import Header from "./Header";
import Search from "./Search";
import UserList from "./UsersList";
import RegisterFormPage from "../RegisterForm";
import { useAccounts } from "@/hooks/useAccounts";
import { URL_BASE } from "@/config/env.config";

const HomePage = () => {
  const {users, isLoading} = useAccounts()

  return (
    <div className="h-full w-full">
      <div className="h-[72px]">
        <Header />
      </div>
      <div className=" bg-[#F6F6F6] mt-[53px]">
        <div className="flex justify-center items-center h-full">
          <Search />
        </div>
        <div className="px-[62px] py-10 pb-12">
        {isLoading ? (
        <p>cargando...</p>
      ) : (
          <div className="flex flex-wrap justify-center">
            {users?.map((user: any, index: number) => {
              return (
                //<UserList key={`landing-user-card-${index}`} user={user} />
                <a href={`${URL_BASE}/sofia-salas-soler`} key={`landing-user-card-${index}`}>
                  <UserList user={user} />
                </a>
              );
            })}
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
