// LoginForm.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";



export interface FormData {
    email: string;
    password: string;
    remember: boolean;
}
interface LoginFormProps {
    onSubmit: (data: FormData) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
    // Define el esquema de validación usando Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Formato de email inválido")
            .required("El email es obligatorio"),
        password: Yup.string()
            .min(4, "La contraseña debe tener al menos 4 caracteres")
            .max(15, "La contraseña no debe exceder los 15 caracteres")
            .required("La contraseña es obligatoria"),
        remember: Yup.boolean(),
    });

    // Inicializa el formulario usando react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(validationSchema) as any,
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-md mx-auto p-8 lg:p-12"
        >
            <div className="flex flex-col gap-4 w-full text-gray-700">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresa tu email"
                        {...register("email")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.email && (
                        <span className="text-red-600 text-sm">{errors.email.message}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        {...register("password")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.password && (
                        <span className="text-red-600 text-sm">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <div className="flex items-baseline w-full gap-2 mt-2">
                    <input
                        type="checkbox"
                        id="remember"
                        {...register("remember")}
                        className="mr-2"
                    />
                    <label htmlFor="remember" className="text-sm">
                        Recuérdame
                    </label>
                    <Link href="/forgot-password" legacyBehavior>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-sm ml-auto"
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                    </Link>
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500"
                >
                    Iniciar sesión
                </button>
                <div className="flex justify-center items-center w-full gap-2 mt-4">
                    ¿No tienes una cuenta?
                    <Link href="/Home" legacyBehavior>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-sm"
                        >
                            Regístrate
                        </a>
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
