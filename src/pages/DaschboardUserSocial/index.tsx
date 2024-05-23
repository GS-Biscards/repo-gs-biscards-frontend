"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { createUser } from "@/services/user.services";

// Define la interfaz de datos del formulario
interface FormData {
    facebookUrl:string;
    instagramUrl:string;
socialmediaLN:string;

}

const DashboardUserAboustMePage: React.FC = () => {
// Define el esquema de validación usando Yup
const validationSchema = Yup.object().shape({
    facebookUrl: Yup.string().required("Ingrese su facebook"),
    instagramUrl: Yup.string().required("ingrese su instragram"),
    socialmediaLN: Yup.string().required("Ingrese su linkedin"),
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
const onRegister: SubmitHandler<FormData> = (data) => {
    console.log("datos", data);
};

return (
    <div className="px-8 my-10">
    <div className="bg-white shadow-2xl rounded-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:w-full">
        <div className="flex flex-col justify-center items-center bg-white md:p-8 lg:p-12">
            <img
            className="w-full max-w-xs lg:max-w-none lg:w-auto h-auto lg:h-[150px] object-contain mt-4 p-0"
            alt="Logo GF"
            src="/asset/images/LOGOTIPO-TRANSPARENTE_Mesa-de-trabajo-1.png"
            />
        </div>
        <form
            onSubmit={handleSubmit(onRegister)}
            className="flex flex-col justify-center w-full max-w-md mx-auto p-8 lg:p-12"
        >
            <h2 className="text-2xl text-center font-bold mb-6 text-slate-700">
            {" "}
            Contacto de Redes Sociales
            </h2>
            <div className="flex flex-col gap-4 w-full text-gray-700">
            <div>
                <label htmlFor="rubro" className="block text-sm font-medium">
                Facebook
                </label>
                <select
                id="facebookUrl"
                {...register("facebookUrl")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                >
                {facebookUrl.map((facebookUrl) => (
                    <option key={  facebookUrl} value={  facebookUrl}>
                    {facebookUrl}
                    </option>
                ))}
                </select>
                {errors.  facebookUrl && (
                <span className="text-red-600 text-sm">
                    {errors.  facebookUrl.message}
                </span>
                )}
            </div>
            <div>
                <label htmlFor="rubro" className="block text-sm font-medium">
                Rubro
                </label>
                <select
                id="rubro"
                {...register("rubro")}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                >
                {rubro.map((rubro) => (
                    <option key={rubro} value={rubro}>
                    {rubro}
                    </option>
                ))}
                </select>
                {errors.rubro && (
                <span className="text-red-600 text-sm">
                    {errors.rubro.message}
                </span>
                )}
            </div>
            <div className="flex justify-end gap-4 text-white  ">
                <button
                type="submit"
                className="w-[132px] h-[43px]  text-center text-base border text-slate-900 border-gray-300 font-semibold rounded hover:bg-gray-500"
                >
                Anterior
                </button>
                <button
                type="submit"
                className="w-[132px] h-[43px] text-white text-center text-base bg-slate-900 font-semibold rounded hover:bg-slate-400"
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

export default DashboardUserAboustMePage;
