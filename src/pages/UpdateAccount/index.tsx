"use client";
import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import Nombre from "./Nombre";
import { UpdUserFree } from "@/models/userFree.model";
import InputForm from "@/components/InputForm";
import ImageForm from "@/components/ImageForm";

// Define la interfaz de datos del formulario
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}
const navItems = [
  { name: "Nombre", value: 1 },
  { name: "Historia", value: 2 },
  { name: "Direccion", value: 3 },
  { name: "Profesión", value: 4 },
  { name: "Redes Sociales", value: 5 },
];
const tipoUser = ["Persona Física", "Persona Juridica"];
const UpdateAccountPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdUserFree>({ defaultValues: { firstName: "", lastName: "" } });
  const [itemSel, setItemSel] = React.useState<number>(1);

  const update: SubmitHandler<UpdUserFree> = (data) => {
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
          {itemSel === 1 && (
            <div>
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"firstName"}
                placeholder={"Nombre"}
                label={"Nombre"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"lastName"}
                placeholder={"Apellido"}
                label={"Apellido"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
              <ImageForm
                id="profileImage"
                register={register}
                errors={errors}
                fieldName="profileImage"
                fieldBase64="profileImageBase64"
                label="Profile Picture"
              />
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"phoneNumbre"}
                placeholder={"Teléfono"}
                label={"Teléfono"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
            </div>
          )}
          {itemSel === 2 && (
            
            <div>
            <label
              htmlFor="miHistoria"
              className="block text-sm font-medium"
            >
              Mi Historia
            </label>
            <textarea
              id="miHistoria"
              placeholder="Cuenta tu historia"
              {...register("history")}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              rows={4}
            />
            {errors.history && (
              <span className="text-red-600 text-sm">
                {errors.history?.message}
              </span>
            )}
          </div>
          )}

          {itemSel === 3 && (
            <div>
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"country"}
                placeholder={"País"}
                label={"País"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"province"}
                placeholder={"Provincia"}
                label={"Provincia"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"locality"}
                placeholder={"Localidad"}
                label={"Localidad"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"street_number"}
                placeholder={"Calle y Número"}
                label={"Calle y Número"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
            </div>
          )}

          {itemSel === 4 && (
            <div>

                  <div>
                  <label htmlFor="pais" className="block text-sm font-medium">
                  Tipo de Usuario
                  </label>
                  <select
                  id="tipoUser"
                  {...register("typeUser")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  >
                  {tipoUser.map((tipoUser) => (
                      <option key={tipoUser} value={tipoUser}>
                      {tipoUser}
                      </option>
                  ))}
                  </select>
                  {errors.typeUser && (
                  <span className="text-red-600 text-sm">
                      {errors.typeUser.message}
                  </span>
                  )}
              </div>
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"idProfession"}
                placeholder={"Profesión"}
                label={"Profesión"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"rol_cargo"}
                placeholder={"Rol o Cargo"}
                label={"Rol o Cargo"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"rubro"}
                placeholder={"Rubro"}
                label={"Rubro"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
              <InputForm
                id={"search-field-select-search-value"}
                register={register}
                errors={errors}
                fieldName={"servicio_comercio"}
                placeholder={"Servicio o Comercio"}
                label={"Servicio o Comercio"}
                styleLabel={"text-sm font-medium"}
                style={{
                  marginTop: "4px",
                  width: "100%",
                  padding: "8px",
                  borderWidth: "1px",
                  borderColor: "rgb(209 213 219)",
                  borderRadius: "4px",
                }}
                required={false}
                classprop={"w-[100%]"}
              />
            </div>
        
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
              onClick={()=> setItemSel((prev) => (prev > 1 ? prev - 1 : prev))}
              className="w-[132px] h-[43px]  text-center text-base border text-slate-900 border-gray-300 font-semibold rounded hover:bg-gray-500"
            >
              Anterior
            </button>)}
            {itemSel !== 5 && (
            <button
              onClick={() => setItemSel((prev) => (prev < navItems.length ? prev + 1 : prev))}
              className="w-[132px] h-[43px] text-white text-center text-base bg-slate-900 font-semibold rounded hover:bg-slate-400"
            >
              Siguiente
            </button>)}
          </div>
        </form>

      
    </div>
  );
};

export default UpdateAccountPage;
