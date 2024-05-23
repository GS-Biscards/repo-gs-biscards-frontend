"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";

// Define la interfaz de datos del formulario
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}
const navItems = [
  { name: "Home", value: 1 },
  { name: "Nombre", value: 2 },
  { name: "Profesión", value: 3 },
  { name: "Editar", value: 4 },
];

const UpdateAccountPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [itemSel, setItemSel] = React.useState<number>(1);
  const items = [1, 2, 3, 4];
  // Maneja el envío del formulario
  const update: SubmitHandler<FormData> = (data) => {
    console.log("datos", data);
    // Realizar acción de registro aquí
  };

  return (
    <div className="flex w-full h-full items-center bg-white">
      <div className="w-[20%]">
        <div className=" p-4 bg-gradient-to-b from-[#203f51] to-[#82aaaa] min-h-screen">
          {navItems.map((item) => (
            <div
              key={item.value}
              className={`w-full p-2 rounded-l-lg ml-8 my-4 ${
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
        <div className="flex flex-col gap-4 w-full text-gray-700">
          <button
            type="submit"
            className="w-full p-2 bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500"
          >
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateAccountPage;
