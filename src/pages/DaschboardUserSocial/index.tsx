"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { createAccountFree } from "@/services/account.services";


// Define la interfaz de datos del formulario
interface FormData {
    facebookUrl?: string;
    instagramUrl?: string;
    linkedinUrl?: string;
}

const DashboardUserSocial: React.FC = () => {
    const router = useRouter();
    // Define el esquema de validación usando Yup
    const validationSchema = Yup.object().shape({
        facebookUrl: Yup.string().required("Ingrese su facebook"),
        instagramUrl: Yup.string().required("Ingrese su instagram"),
        linkedinUrl: Yup.string().required("Ingrese su LinkedIn"),
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
    const onRegister: SubmitHandler<FormData> = async (data) => {
    const formulario1: any = window.localStorage.getItem("formulario1");
    const formulario2: any = window.localStorage.getItem("formulario2");
    const formulario3: any = window.localStorage.getItem("formulario3");
    console.log("formulario1", JSON.parse(formulario1));
    console.log("formulario2", JSON.parse(formulario2));
    console.log("formulario3", JSON.parse(formulario3));
    console.log("formulario4", data);
    const request2 = {
        ...JSON.parse(formulario1), ...JSON.parse(formulario2) ,...JSON.parse(formulario3),...data

    }
        const request = {
        userId: "",
        firstName: JSON.parse(formulario1).firstName,
        lastName: "",
        companyName: "",
        email: "",
        phoneNumbre: "",
        profesion: "",
        rol_cargo: "",
        rubro_comercio: "",
        servicio: "",
        street: "",
        number: "",
        locality: "",
        province: "",
        country: "",
        facebookUrl: "",
        instagramUrl: "",
        whatsappUrl: "",
        idProfession: "",
        };
        console.log("1" ,request);
        console.log("2" ,request2);
        const resp = await  createAccountFree(request2)
    // localStorage.setItem("formulario3", JSON.stringify(data));
    // router.push('/register-user2/paso3');
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
                                <label htmlFor="facebookUrl" className="block text-sm font-medium">
                                    Facebook
                                </label>
                                <input
                                    type="text"
                                    id="facebookUrl"
                                    placeholder="Ingresa tu facebook"
                                    {...register("facebookUrl")}
                                    className="mt-1 text-xs block w-full p-2 border border-gray-300 rounded"
                                />
                                {errors.facebookUrl && (
                                    <span className="text-red-600 text-sm">
                                        {errors.facebookUrl.message}
                                    </span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="instagramUrl" className="block text-sm font-medium">
                                    Instagram
                                </label>
                                <input
                                    type="text"
                                    id="instagramUrl"
                                    placeholder="Ingresa tu instagram"
                                    {...register("instagramUrl")}
                                    className="mt-1 text-xs block w-full p-2 border border-gray-300 rounded"
                                />
                                {errors.instagramUrl && (
                                    <span className="text-red-600 text-sm">
                                        {errors.instagramUrl.message}
                                    </span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="linkedinUrl" className="block text-sm font-medium">
                                    LinkedIn
                                </label>
                                <input
                                    type="text"
                                    id="linkedinUrl"
                                    placeholder="Ingresa tu linkedin"
                                    {...register("linkedinUrl")}
                                    className="mt-1 text-xs block w-full p-2 border border-gray-300 rounded"
                                />
                                {errors.linkedinUrl && (
                                    <span className="text-red-600 text-sm">
                                        {errors.linkedinUrl.message}
                                    </span>
                                )}
                            </div>
                            <div className="flex justify-end gap-4 text-white ">
                                <button
                                    type="submit"
                                    className="w-[132px] h-[43px] text-center text-base border text-slate-900 border-gray-300 font-semibold rounded hover:bg-gray-500"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="w-[132px] h-[43px] text-white text-center text-base bg-slate-900 font-semibold rounded hover:bg-slate-400"
                                >
                                    Confirmar
                                </button>
                            </div>
                        </div>
                    </form>
        </div>
    </div>
    </div>
);
};

export default DashboardUserSocial;

