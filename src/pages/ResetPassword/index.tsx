"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";

// Define la interfaz de datos del formulario
interface FormData {
  email: string;
}

const ResetPasswordPage: React.FC = () => {
  // Define el esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato de correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),
  });

  // Inicializa el formulario usando react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validationSchema) as any,
  });

  // Maneja el envío del formulario
  const onResetPassword: SubmitHandler<FormData> = (data) => {
    console.log("datos", data);
    // Realizar acción de restablecimiento de contraseña aquí
  };

  return (
    <div className="px-8 my-20">
      <div className="flex flex-wrap shadow-2xl rounded-md overflow-hidden">
        <div className="flex w-full items-center bg-white">
          <div className="hidden lg:flex flex-col w-full lg:w-[650px] items-center gap-1 bg-gradient-to-b from-[#203f51] to-[#82aaaa]">
            <img
              className="w-full lg:w-[469px] lg:h-[469px] object-cover"
              alt="Logo GF"
              src="/asset/images/LOGO BLANCO TRANSPARENTE_Mesa_de_trabajo1.png"
            />
            <div className="text-white text-2xl font-light text-center m-8">
              “SIMPLEMENTE TU PRESENCIA WEB”
            </div>
          </div>
          <form onSubmit={handleSubmit(onResetPassword)} className="ff-roboto-slab flex flex-col w-full max-w-md mx-auto p-8 lg:p-12">
            <h1 className="text-2xl text-center font-bold text-slate-700 mb-4 ">Restablecer contraseña</h1>
            <p className="mb-4 text-sm text-gray-700 text-center">
              Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
            </p>
            <div className="flex flex-col gap-4 w-full text-gray-700">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Ingresa tu correo electrónico"
                  {...register("email")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
              </div>
              <button type="submit" className="w-full p-2 bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500">
                Restablecer contraseña
              </button>
              <div className="flex justify-center items-center w-full gap-2 mt-4">
                Volver a
                <Link href="/login-form" legacyBehavior>
                  <a target="_self" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                    inicio de sesion
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
