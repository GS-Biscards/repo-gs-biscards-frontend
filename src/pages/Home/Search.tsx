"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { User } from "@/models/user.model";
import InputForm from "@/components/InputForm";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

//import {searchUsersByValue } from '@/services/user.services';
//import UsersFoundList from './UsersFoundList';
import Spin from "@/components/Spin";

interface Props {
  setShowSearchSection?: any;
  toggleSection?: any;
  slidePrev?: any;
}

const Search = ({ setShowSearchSection, toggleSection, slidePrev }: Props) => {
  const {
    register,
    getValues,
    setValue,
    formState: { errors },
    handleSubmit: handleSearch,
  } = useForm<{
    searchValue: string;
  }>({ defaultValues: { searchValue: "" } });
  const [usersFound, setUsersFound] = React.useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = React.useState<boolean>(false);

  const serchBusinessCards = async (data: { searchValue: string }) => {
    /* try {
      setLoadingUsers(true)
      const users = await searchUsersByValue(data.searchValue);
      setUsersFound(users);
      setLoadingUsers(false)
    } catch (error) {
      setUsersFound([])
    } */
  };

  return (
    <div className="bg-search">
      <div className="flex flex-col lg:pl-40 lg:pr-40 lg:pt-8">
        <p className="ff-montserrat text-[10px] lg:text-[29px] font-bold text-left text-white self-start">
          Hola, que estás buscando ?
        </p>
        <form onSubmit={handleSearch(serchBusinessCards)} className="w-full">
          <div className="flex flex-row justify-center gap-x-10 ">
            <InputForm
              id={"search-field-select-search-value"}
              register={register}
              errors={errors}
              fieldName={"searchValue"}
              placeholder={"Nombre"}
              icon={''}
              style={{ width: '15rem', height: '52px', borderRadius: '20px' }}
              required={false}
            />
            <InputForm
              id={"search-field-select-search-value"}
              register={register}
              errors={errors}
              fieldName={"searchValue"}
              placeholder={"Profesión"}
              icon={<MagnifyingGlassIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />}
              style={{ width: '15rem', height: '52px', borderRadius: '20px'}}
              required={false}
            />
            <button
              className="cursor-pointer text-white h-[52px] w-[130px] rounded-[20px] bg-[#203F51] flex justify-center items-center"
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
  );
};

export default Search;
