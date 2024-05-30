"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { User } from "@/models/user.model";
import InputForm from "@/components/InputForm";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

//import {searchUsersByValue } from '@/services/user.services';
//import UsersFoundList from './UsersFoundList';
import Spin from "@/components/Spin";
import { useSearch } from "@/hooks/useSearch";

/* interface Props {
  setShowSearchSection?: any;
  toggleSection?: any;
  slidePrev?: any;
}
 */
const Search = () => {
  const {
    register,
    formState: { errors },
    handleSubmit: handleSearch,
  } = useForm<{
    name: string, profession:string
  }>({ defaultValues: { name: "", profession:"" } });
  const [usersFound, setUsersFound] = React.useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = React.useState<boolean>(false);
  const { searchUser} = useSearch()

  const serchBusinessCards = async (data: { name: string, profession:string }) => {
    console.log('datos traidos',data)
    searchUser(data);
  };

  return (
    <div className="mt-16 px-[140px] lg:px[140px]">
    <div className="bg-search">
      <div className="flex flex-col p-[42px] justify-between h-full">
        <p className="ff-montserrat text-[16px] lg:text-[29px] font-bold text-left text-white self-start pb-5">
          Hola, que estás buscando ?
        </p>
        <form onSubmit={handleSearch(serchBusinessCards)} className="w-full">
          <div className="flex flex-col md:flex-row justify-center gap-x-10 w-full">
            <InputForm
              id={"search-field-select-search-value"}
              register={register}
              errors={errors}
              fieldName={"name"}
              placeholder={"Nombre"}
              icon={''}
              style={{height: '52px', borderRadius: '20px' }}
              required={false}
              classprop={'w-[100%]'}
            />
            <InputForm
              id={"search-field-select-search-value"}
              register={register}
              errors={errors}
              fieldName={"profession"}
              placeholder={"Profesión"}
              icon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />}
              style={{height: '52px', borderRadius: '20px'}}
              required={false}
              classprop={'w-[100%]'}
            />
            <button
              className="text-white h-[52px] w-[100%] rounded-[20px] bg-[#203F51] flex justify-center items-center border-2 border-[#F6F6F6]"
              type="submit"
            >
              <MagnifyingGlassIcon className="h-6 w-6 flex-none text-white" aria-hidden="true"/>
              Buscar
            </button>
          </div>
        </form>
      </div>
      {loadingUsers && <Spin showSpin={loadingUsers} />}
      {/* <UsersFoundList usersFound={usersFound} /> */}
    </div>
    
      
    </div>
  );
};

export default Search;
