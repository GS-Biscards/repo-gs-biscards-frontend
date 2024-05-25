"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import Name from "./Name";
import { UpdUserFree } from "@/models/userFree.model";
import History from "./History";
import Address from "./Address";
import Profession from "./Profession";
import SocialMedia from "./SocialMedia";


const navItems = [
  { name: "Nombre", value: 1 },
  { name: "Sobre mí", value: 2 },
  { name: "Direccion", value: 3 },
  { name: "Profesión", value: 4 },
  { name: "Redes Sociales", value: 5 },
];

const UpdateAccountPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<UpdUserFree>();
  const [itemSel, setItemSel] = React.useState<number>(1);

  const update: SubmitHandler<UpdUserFree> = (data) => {
    console.log("datos", data);
    // Realizar acción de registro aquí
  };

  useEffect(() => {
    setValue("firstName", "Carlos");
    setValue("lastName", "Carlos");
  }, []);

  return (
    <div className="flex w-full h-full items-center bg-white">
      <div className="w-[20%]">
        <div className=" p-4 bg-gradient-to-b from-[#203f51] to-[#82aaaa] min-h-screen">
          {navItems.map((item) => (
            <div
              key={item.value}
              className={`w-full p-2 rounded-l-lg ml-8 my-4 cursor-pointer ${
                itemSel === item.value
                  ? "act bg-white text-[#203F51]"
                  : "dis text-white"
              } hover:bg-white hover:text-[#203F51]`}
              onClick={() => setItemSel(item.value)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit(update)}
        className="flex flex-col w-full max-w-md mx-auto p-8 lg:p-12"
      >
        {itemSel === 1 && (
          <Name register={register} errors={errors} setValue={setValue} />
        )}
        {itemSel === 2 && (
          <History register={register} errors={errors}/>
        )}

        {itemSel === 3 && (
          <Address register={register} errors={errors}/>
        )}

        {itemSel === 4 && (
          <Profession register={register} errors={errors}/>
        )}
        {itemSel === 5 && (
          <SocialMedia register={register} errors={errors}/>
        )}

        <div className="flex flex-col gap-4 w-full text-gray-700">
          <button
            type="submit"
            className="w-full p-2 bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500"
          >
            Guardar
          </button>
        </div>
        <div className="flex justify-between gap-4 text-white mt-8">
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
  );
};

export default UpdateAccountPage;
