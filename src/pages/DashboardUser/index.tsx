"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";

// Define la interfaz de datos del formulario
interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  password: string;
  miHistoria: string;
  remember: boolean;
}

const DashboardUserPage: React.FC = () => {
  // Define el esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    nombre: Yup.string()
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "El nombre y apellido no son válidos"
      )
      .required("El nombre y apellido son obligatorios"),
    email: Yup.string()
      .email("Formato de email inválido")
      .required("El email es obligatorio"),
    telefono: Yup.string()
      .matches(/^[0-9]+$/, "El teléfono solo debe contener números")
      .min(10, "El teléfono debe tener al menos 10 dígitos")
      .required("El teléfono es obligatorio"),
    miHistoria: Yup.string().required("Este campo es obligatorio"),
  });

  // Inicializa el formulario usando react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema) as any,
  });

  // Maneja el envío del formulario
  const onLogin: SubmitHandler<FormData> = (data) => {
    console.log("data", data);
  };

  return (
    <div className="px-8 my-20">
      <div className="bg-white shadow-2xl rounded-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center bg-white p-8 lg:p-12">
            <img
              className="w-full max-w-xs lg:max-w-none lg:w-auto h-auto lg:h-[150px] object-contain mb-8"
              alt="Logo GF"
              src="/asset/images/LOGOTIPO-TRANSPARENTE_Mesa-de-trabajo-1.png"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-56 object-cover object-center"
                  src="/asset/images/1.png"
                  alt="Card image"
                />
                <div className="p-4">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    Template Básico
                  </h2>
                  <p className="text-gray-700">Subtítulo de la tarjeta</p>
                  <div className="flex justify-end gap-4 mt-4">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded">
                      Ver más
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded">
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  className="w-full h-56 object-cover object-center"
                  src="/asset/images/photo.png"
                  alt="Card image"
                />
                <div className="p-4">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    Template Premium
                  </h2>
                  <p className="text-gray-700">Subtítulo de la tarjeta paga</p>
                  <div className="flex justify-end gap-4 mt-4">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded">
                      Ver más
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded">
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onLogin)}
            className="flex flex-col w-full max-w-md mx-auto p-8 lg:p-12"
          >
            <h2 className="text-2xl font-bold mb-6">Mis Datos Personales</h2>
            <div className="flex flex-col gap-4 w-full text-gray-700">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium">
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Ingresa tu nombre y apellido"
                  {...register("nombre")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.nombre && (
                  <span className="text-red-600 text-sm">
                    {errors.nombre.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Ingresa tu email"
                  {...register("email")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium">
                  Teléfono
                </label>
                <input
                  type="text"
                  id="telefono"
                  placeholder="Ingresa tu teléfono"
                  {...register("telefono")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
                {errors.telefono && (
                  <span className="text-red-600 text-sm">
                    {errors.telefono.message}
                  </span>
                )}
              </div>
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
                  {...register("miHistoria")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  rows={4}
                />
                {errors.miHistoria && (
                  <span className="text-red-600 text-sm">
                    {errors.miHistoria.message}
                  </span>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-[132px] h-[43px]  text-center text-base bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardUserPage;
