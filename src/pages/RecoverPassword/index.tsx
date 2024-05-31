    "use client";
    import React, { useState } from "react";
    import { useForm, SubmitHandler } from "react-hook-form";
    import { yupResolver } from "@hookform/resolvers/yup";
    import * as Yup from "yup";
    import Link from "next/link";
    import { useRouter } from "next/navigation";
    import { recoverPass } from "@/services/user.services";

    // Define la interfaz de datos del formulario
    interface FormData {
    email:string,
    password: string;
    confirmPassword: string;
    }

    const RecoverPasswordPage: React.FC = () => {
    const router = useRouter();
    // Define el esquema de validación usando Yup
    const validationSchema = Yup.object().shape({
        password: Yup.string()
        .min(4, "La contraseña debe tener al menos 4 caracteres")
        .max(8, "La contraseña no debe exceder los 8 caracteres") 
        .required("La contraseña es obligatoria"), 
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Las contraseñas deben coincidir")
        .required("Confirma tu contraseña"),
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
    const onSavePassword: SubmitHandler<FormData> = async (data) => {
        const request = { email: data.email, password: data.password };
        try {
        const resul = await recoverPass(request);
        console.log("enviado al email: ", request);
        console.log("recuperarr", resul);
        router.replace("/login-form");
        } catch (error: any) {
        console.log("error", error.response.data.message);
        }
    };

    // Estado para mostrar/ocultar la contraseña
    const [showPassword, setShowPassword] = useState(false);

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
            <form
                onSubmit={handleSubmit(onSavePassword)}
                className="ff-roboto-slab flex flex-col w-full max-w-md mx-auto p-8 lg:p-12"
            >
                <h1 className="text-2xl text-center font-bold text-slate-700 mb-4 ">
                Cambiar contraseña
                </h1>
                <p className="mb-4 text-sm text-gray-700 text-justify">
                Por favor, crea una contraseña única y nueva para este sitio, sin
                utilizar contraseñas anteriores de otros sitios web.{" "}
                </p>
                <div className="flex flex-col gap-4 w-full text-gray-700">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                    Correo electrónico
                    </label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo electrónico"
                    {...register("email")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                    <span className="text-red-600 text-sm">
                        {errors.email.message}
                    </span>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">
                    Crear nueva contraseña
                    </label>
                    <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    {...register("password")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && (
                    <span className="text-red-600 text-sm">
                        {errors.password.message}
                    </span>
                    )}
                </div>
                <div>
                    <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium"
                    >
                    Confirmar nueva contraseña
                    </label>
                    <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirma tu contraseña"
                    {...register("confirmPassword")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    aria-invalid={errors.confirmPassword ? "true" : "false"}
                    />
                    {errors.confirmPassword && (
                    <span className="text-red-600 text-sm">
                        {errors.confirmPassword.message}
                    </span>
                    )}
                </div>
                <div className="flex items-center mt-2">
                    <input
                    id="showPassword"
                    type="checkbox"
                    className="mr-2"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="showPassword" className="text-sm">
                    Mostrar contraseña
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500"
                >
                    Guardar contraseña
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
    };

    export default RecoverPasswordPage;
