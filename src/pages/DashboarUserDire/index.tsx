'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
// import { createUser } from "@/services/user.services";

// Define la interfaz de datos del formulario
interface FormData {
    pais: string;
    provincia: string;
    localidad: string;
    calleNumero: string;
}

const DashboardUserDirePage: React.FC = () => {

    const router = useRouter();
  // Define el esquema de validación usando Yup
    const validationSchema = Yup.object().shape({
        pais: Yup.string().required("El país es obligatorio"),
        provincia: Yup.string().required("La provincia es obligatoria"),
        localidad: Yup.string().required("La localidad es obligatoria"),
        calleNumero: Yup.string().required("La calle y número son obligatorios"),
    });

  // Opciones para las listas desplegables
    const paises = ["Argentina", "Brasil", "Chile", "Uruguay"];
    const provincias = ["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza"];
    const localidades = ["Ciudad Autónoma de Buenos Aires", "Rosario", "Córdoba", "Mendoza"];

  // Inicializa el formulario usando react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(validationSchema) as any,
        });

  // Maneja el envío del formulario
    const onNext: SubmitHandler<FormData> = (data) => {
        console.log("data", data);
        localStorage.setItem("formulario2", JSON.stringify(data))
        router.push('/register-user2/paso3');
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
                onSubmit={handleSubmit(onNext)}
                className="flex flex-col justify-center w-full max-w-md mx-auto p-8 lg:p-12"
                >
                <h2 className="text-2xl text-center font-bold mb-6 text-slate-700"> Dirección</h2>
                <div className="flex flex-col gap-4 w-full text-gray-700">
                    <div>
                        <label htmlFor="pais" className="block text-sm font-medium">
                        País
                        </label>
                        <select
                        id="pais"
                        {...register("pais")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        >
                        {paises.map((pais) => (
                            <option key={pais} value={pais}>
                            {pais}
                            </option>
                        ))}
                        </select>
                        {errors.pais && <span className="text-red-600 text-sm">{errors.pais.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="provincia" className="block text-sm font-medium">
                        Provincia
                        </label>
                        <select
                        id="provincia"
                        {...register("provincia")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        >
                        {provincias.map((provincia) => (
                            <option key={provincia} value={provincia}>
                            {provincia}
                            </option>
                        ))}
                        </select>
                        {errors.provincia && <span className="text-red-600 text-sm">{errors.provincia.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="localidad" className="block text-sm font-medium">
                        Localidad
                        </label>
                        <select
                        id="localidad"
                        {...register("localidad")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        >
                        {localidades.map((localidad) => (
                            <option key={localidad} value={localidad}>
                            {localidad}
                            </option>
                        ))}
                        </select>
                        {errors.localidad && <span className="text-red-600 text-sm">{errors.localidad.message}</span>}
                    </div>
                    <div>
                        <label htmlFor="calleNumero" className="block text-sm font-medium">
                        Calle y Número
                        </label>
                        <input
                        type="text"
                        id="calleNumero"
                        placeholder="Ingresa tu calle y número"
                        {...register("calleNumero")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.calleNumero && <span className="text-red-600 text-sm">{errors.calleNumero.message}</span>}
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

export default DashboardUserDirePage;
