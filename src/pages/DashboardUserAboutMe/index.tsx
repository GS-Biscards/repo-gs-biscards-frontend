    "use client";
    import React from "react";
    import { useForm, SubmitHandler } from "react-hook-form";
    import { yupResolver } from "@hookform/resolvers/yup";
    import * as Yup from "yup";
    import { useRouter } from "next/navigation";
import { createAccountFree } from "@/services/account.services";
    // import { createUser } from "@/services/user.services";

    // Define la interfaz de datos del formulario
    interface FormData {
    tipoUser: string;
    profesion: string;
    rol_cargo: string;
    rubro_comercio: string;
    servicio: string;
    documentPdf: string;
    }

    const DashboardUserAboustMePage: React.FC = () => {
    const router = useRouter();
    // Define el esquema de validación usando Yup
    const validationSchema = Yup.object().shape({
        tipoUser: Yup.string().required("El tipo de usuario  es obligatorio"),
        profesion: Yup.string().required("La profesión es obligatoria"),
        rubro_comercio: Yup.string().required("El rubro o comercio es obligatoria"),
        servicio: Yup.string().required("El servico es obligatoria"),
    });

    // Opciones para las listas desplegables
    const tipoUser = ["Persona Física", "Persona Juridica"];
    const profesion = ["Abogado", "Ingeniero", "Profesor", "Contador", "otro"];
    const rubro_comercio = [
        " turístico",
        "alimenticio",
        "Artesano",
        "electrodomésticos",
        "industrial",
        "otro",
    ];
    const servicio = [
        " turístico",
        "alimenticio",
        "Artesano",
        "electrodomésticos",
        "industrial",
        "otro",
    ];
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
        console.log("formulario1", JSON.parse(formulario1));
        console.log("formulario2", JSON.parse(formulario2));
        console.log("formulario3", data);
        const request2 = {
            ...JSON.parse(formulario1), ...JSON.parse(formulario2) ,...data

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
                Acerca de mi
                </h2>
                <div className="flex flex-col gap-4 w-full text-gray-700">
                <div>
                    <label htmlFor="pais" className="block text-sm font-medium">
                    Tipo de Usuario
                    </label>
                    <select
                    id="tipoUser"
                    {...register("tipoUser")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    >
                    {tipoUser.map((tipoUser) => (
                        <option key={tipoUser} value={tipoUser}>
                        {tipoUser}
                        </option>
                    ))}
                    </select>
                    {errors.tipoUser && (
                    <span className="text-red-600 text-sm">
                        {errors.tipoUser.message}
                    </span>
                    )}
                </div>
                <div>
                    <label
                    htmlFor="profesion"
                    className="block text-sm font-medium"
                    >
                    Profesión
                    </label>
                    <select
                    id="profesion"
                    {...register("profesion")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    >
                    {profesion.map((profesion) => (
                        <option key={profesion} value={profesion}>
                        {profesion}
                        </option>
                    ))}
                    </select>
                    {errors.profesion && (
                    <span className="text-red-600 text-sm">
                        {errors.profesion.message}
                    </span>
                    )}
                </div>
                <div>
                    <label
                    htmlFor="rol_cargo"
                    className="block text-sm font-medium"
                    >
                    Rol o Cargo
                    </label>
                    <input
                    type="text"
                    id="rol_cargo"
                    placeholder="Ingresa tu rol o rol_cargo"
                    {...register("rol_cargo")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.rol_cargo && (
                    <span className="text-red-600 text-sm">
                        {errors.rol_cargo.message}
                    </span>
                    )}
                </div>
                <div>
                    <label
                    htmlFor="rubro_comercio"
                    className="block text-sm font-medium"
                    >
                    Rubro
                    </label>
                    <select
                    id="rubro_comercio"
                    {...register("rubro_comercio")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    >
                    {rubro_comercio.map((rubro_comercio) => (
                        <option key={rubro_comercio} value={rubro_comercio}>
                        {rubro_comercio}
                        </option>
                    ))}
                    </select>
                    {errors.rubro_comercio && (
                    <span className="text-red-600 text-sm">
                        {errors.rubro_comercio.message}
                    </span>
                    )}
                </div>
                <div>
                    <label htmlFor="servicio" className="block text-sm font-medium">
                    Servicio
                    </label>
                    <select
                    id="servicio"
                    {...register("servicio")}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    >
                    {servicio.map((servicio) => (
                        <option key={servicio} value={servicio}>
                        {servicio}
                        </option>
                    ))}
                    </select>
                    {errors.servicio && (
                    <span className="text-red-600 text-sm">
                        {errors.servicio.message}
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
