"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { jwtDecode } from "jwt-decode";
import Name from "./Name";
import { UpdUserFree } from "@/models/userFree.model";
import History from "./History";
import Address from "./Address";
import Profession from "./Profession";
import SocialMedia from "./SocialMedia";
import { useUpdate } from "@/hooks/useUpdate";
import bzCardStore from "@/staores";
import { getAuthStore } from "@/staores/auth/auth.store";
import { getUserIdStore } from "@/staores/userId/userId.store";

const navItems = [
  { name: "Nombre", value: 1 },
  { name: "Sobre mí", value: 2 },
  { name: "Direccion", value: 3 },
  { name: "Profesión", value: 4 },
  { name: "Redes Sociales", value: 5 },
];

const UpdateAccountPage: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors }, setValue, getValues, } = useForm<UpdUserFree>();

  const [itemSel, setItemSel] = React.useState<number>(1);
  const { updateUser } = useUpdate();
  const [account, setAccount] = useState([]);
  const { token } = getAuthStore().getState();
  const {user, getUser } = getUserIdStore().getState();
  const [id, setId] = useState(''); 
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token)  as { id: string };
        getUser(decodedToken.id)    
        setId(decodedToken.id)
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        throw error;
      }
    }
  }, []);

  useEffect(() => {
    if(user){
      setValue("firstName", user.account.firstName);
      setValue("lastName", user.account.lastName);
      setValue("profileImg", user.imagesAccount.profileImg);
      setValue("phoneNumber", user.account.phoneNumber);
      setValue("history", user.account.history);
      setValue("country", user.address[0]?.country);
      setValue("province", user.address[0]?.province);
      setValue("locality", user.address[0]?.locality);
      setValue("street", user.address[0]?.street);
      setValue("number", user.address[0]?.number);
      setValue("profession", user.professions[0]?.name);
      setValue("rol_cargo", user.account.rol_cargo);
      setValue("facebookUrl", user.socialMedia.facebookUrl);
      setValue("instagramUrl", user.socialMedia.instagramUrl);
      setValue("linkedinUrl", user.socialMedia.linkedinUrl);
    }
  }, [user]);

  const update: SubmitHandler<UpdUserFree> = (data) => {
    console.log("datos", getValues());
    updateUser(getValues());
  };

  return (
    <div className="flex flex-col lg:flex-row w-full h-full items-center bg-white">
      <div className="lg:hidden w-full flex justify-between items-center px-4 bg-gradient-to-b from-[#203f51] to-[#82aaaa]">
        <img
          src={"asset/icons/logo-blanco.png"}
          alt={"guilsoft-logo"}
          width={139}
          height={52}
          className="mt-4"
        />
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      <div className={`lg:w-[20%] w-full h-full ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        <div className=" px-4 py-8 bg-gradient-to-b from-[#203f51] to-[#82aaaa] min-h-screen">
          {!menuOpen && (
            <img
              src={"asset/icons/logo-blanco.png"}
              alt={"guilsoft-logo"}
              width={139}
              height={52}
            />            
          )}
          {navItems.map((item) => (
            <div
              key={item.value}
              className={`w-full p-2 rounded-lg my-4 cursor-pointer ${
                itemSel === item.value
                  ? "act bg-white text-[#203F51]"
                  : "dis text-white"
              } hover:bg-white hover:text-[#203F51]`}
              onClick={() => {setItemSel(item.value); setMenuOpen(false); }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen overflow-y-scroll lg:w-[80%]">
        <form
          onSubmit={handleSubmit(update)}
          className="flex flex-col w-full max-w-md mx-auto p-8 lg:p-12"
        >
          {itemSel === 1 && (
            <Name register={register} errors={errors} setValue={setValue} profileImg={user?.imagesAccount.profileImg}/>
          )}
          {itemSel === 2 && <History register={register} errors={errors} />}

          {itemSel === 3 && <Address register={register} errors={errors} watch={watch}/>}

          {itemSel === 4 && <Profession register={register} errors={errors} tipo={user.account.typeUser}/>}
          {itemSel === 5 && <SocialMedia register={register} errors={errors} />}

          <div className="flex flex-col gap-4 w-full text-gray-700">
            <button
              type="submit"
              className="w-full p-2 bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500"
            >
              Guardar
            </button>
          </div>
          <div
            className={`flex gap-4 text-white mt-8 ${
              itemSel === 1 ? "justify-end" : "justify-between "
            }`}
          >
            {itemSel !== 1 && (
              <button
                onClick={() => setItemSel((prev) => (prev > 1 ? prev - 1 : prev))}
                className="w-[132px] h-[43px]  text-center text-base border text-slate-900 border-gray-300 font-semibold rounded hover:bg-gray-500"
              >
                Anterior
              </button>
            )}
            {itemSel !== 5 && (
              <button
                onClick={() => {
                  setItemSel((prev) =>
                    prev < navItems.length ? prev + 1 : prev
                  );
                  console.log("get values", getValues());
                }}
                className="w-[132px] h-[43px] text-white text-center text-base bg-slate-900 font-semibold rounded hover:bg-slate-400"
              >
                Siguiente
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAccountPage;
