"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import { createUser } from "@/services/user.services";
import { useRouter } from "next/navigation";

// Define la interfaz de datos del formulario
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const SignUpFormPage: React.FC = () => {
  const router = useRouter();
  // Define el esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato de correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),
    password: Yup.string()
      .min(4, "La contraseña debe tener al menos 4 caracteres")
      .max(15, "La contraseña no debe exceder los 15 caracteres")
      .required("La contraseña es obligatoria"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
      .required('Confirmar contraseña es obligatorio'),
    terms: Yup.boolean()
      .oneOf([true], "Debe aceptar los Términos y Condiciones y las Políticas de Privacidad")
      .required("Debe aceptar los Términos y Condiciones y las Políticas de Privacidad"),
  });

  // Inicializa el formulario usando react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validationSchema) as any,
  });

  // Maneja el envío del formulario
  const onSignUp: SubmitHandler<FormData> = async (data) => {
    const request = {email:data.email,password:data.password}
    try {      
      //await createUser(request);
      router.replace('/signup-validate-email')
    } catch (error) {
      console.log("mostrar mensaje de error")
    }

  
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
          <form onSubmit={handleSubmit(onSignUp)} className="flex flex-col w-full max-w-md mx-auto p-8 lg:p-12">
          <h1 className="text-2xl text-center font-bold text-slate-700 mb-4 ">Bienvenido a  GuilSoft</h1>

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
              <div>
                <label htmlFor="password" className="block text-sm font-medium">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  {...register("password")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirmar contraseña</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirma tu contraseña"
                  {...register("confirmPassword")}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
                {errors.confirmPassword && <span className="text-red-600 text-sm">{errors.confirmPassword.message}</span>}
              </div>
              <div className="flex items-start w-full gap-2 mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  {...register("terms")}
                  className="text-center"
                />
                <label htmlFor="terms" className="text-sm">
                  He leído y acepto todos los 
                  <Link href="/terms" className="text-blue-500 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                    Términos y Condiciones
                  </Link> y las 
                  <Link href="/privacy" className="text-blue-500 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                    Políticas de Privacidad
                  </Link>
                </label>
              </div>
              {errors.terms && <span className="text-red-600 text-sm">{errors.terms.message}</span>}
              <button type="submit" className="w-full p-2 bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500">
                Registrarse
              </button>
              <div className="flex justify-center items-center w-full gap-2 mt-4">
                ¿Ya tienes una cuenta?
                <Link href="/login-form" className="text-blue-500 hover:underline text-sm" target="_self" rel="noopener noreferrer">
                  Acceso
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpFormPage;
function createUer(request: { email: string; password: string; }) {
  throw new Error("Function not implemented.");
}

