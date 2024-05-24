'use client'
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

// Define la interfaz de datos del formulario
interface FormData {
    country: string;
    province: string;
    locality: string;
    street: string;
    number: string;
}

// Define la interfaz para las provincias y localidades
interface Province {
    nombre: string;
}

interface Locality {
    nombre: string;
}

const DashboardUserDirePage: React.FC = () => {
    const router = useRouter();

    // Define el estado para los países, provincias y localidades
    const [countries, setCountries] = useState<string[]>([]);
    const [provinces, setProvinces] = useState<string[]>([]);
    const [localities, setLocalities] = useState<string[]>([]);

    // Define el esquema de validación usando Yup
    const validationSchema = Yup.object().shape({
        country: Yup.string().required("El país es obligatorio"),
        province: Yup.string().required("La provincia es obligatoria"),
        locality: Yup.string().required("La localidad es obligatoria"),
        street: Yup.string().required("La calle es obligatoria"),
        number: Yup.string().required("El número es obligatorio"),
    });

    // Inicializa el formulario usando react-hook-form
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(validationSchema) as any,
    });

    const selectedCountry = watch("country");
    const selectedProvince = watch("province");

    // Maneja el envío del formulario
    const onNext: SubmitHandler<FormData> = (data) => {
        console.log("data", data);
        localStorage.setItem("formulario2", JSON.stringify(data));
        router.push('/register-user2/paso3');
    };

    // Fetch countries from API
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const data: any[] = await response.json();
                const countryNames = data.map(country => country.name.common).sort();
                setCountries(countryNames);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };

        fetchCountries();
    }, []);

    // Fetch provinces based on selected country
    useEffect(() => {
        if (selectedCountry === "Argentina") {
            const fetchProvinces = async () => {
                try {
                    const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
                    const data = await response.json();
                    const provinceNames = data.provincias.map((province: Province) => province.nombre);
                    setProvinces(provinceNames);
                    setLocalities([]); // Reset localities when country changes
                } catch (error) {
                    console.error("Error fetching provinces:", error);
                }
            };

            fetchProvinces();
        } else {
            setProvinces([]);
            setLocalities([]);
        }
    }, [selectedCountry]);

    // Fetch localities based on selected province
    useEffect(() => {
        if (selectedProvince) {
            const fetchLocalities = async () => {
                try {
                    const response = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${selectedProvince}`);
                    const data = await response.json();
                    const localityNames = data.localidades.map((locality: Locality) => locality.nombre);
                    setLocalities(localityNames);
                } catch (error) {
                    console.error("Error fetching localities:", error);
                }
            };

            fetchLocalities();
        } else {
            setLocalities([]);
        }
    }, [selectedProvince]);

    return (
        <div className="px-4 my-10">
            <div className="bg-white shadow-2xl rounded-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col justify-center items-center bg-white p-4 lg:p-12">
                        <img
                            className="w-full max-w-xs lg:max-w-none lg:w-auto h-auto lg:h-[150px] object-contain mt-4 p-0"
                            alt="Logo GF"
                            src="/asset/images/LOGOTIPO-TRANSPARENTE_Mesa-de-trabajo-1.png"
                        />
                    </div>
                    <form
                        onSubmit={handleSubmit(onNext)}
                        className="flex flex-col justify-center w-full max-w-md mx-auto p-4 lg:p-12"
                    >
                        <h2 className="text-2xl text-center font-bold mb-6 text-slate-700"> Dirección</h2>
                        <div className="flex flex-col gap-4 w-full text-gray-700">
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium">
                                    País
                                </label>
                                <select
                                    id="country"
                                    {...register("country")}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                >
                                    <option value="">Selecciona un país</option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                {errors.country && <span className="text-red-600 text-sm">{errors.country.message}</span>}
                            </div>
                            {selectedCountry === "Argentina" && (
                                <>
                                    <div>
                                        <label htmlFor="province" className="block text-sm font-medium">
                                            Provincia
                                        </label>
                                        <select
                                            id="province"
                                            {...register("province")}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                            disabled={!selectedCountry}
                                        >
                                            <option value="">Selecciona una provincia</option>
                                            {provinces.map((province) => (
                                                <option key={province} value={province}>
                                                    {province}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.province && <span className="text-red-600 text-sm">{errors.province.message}</span>}
                                    </div>
                                    <div>
                                        <label htmlFor="locality" className="block text-sm font-medium">
                                            Localidad
                                        </label>
                                        <select
                                            id="locality"
                                            {...register("locality")}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                            disabled={!selectedProvince}
                                        >
                                            <option value="">Selecciona una localidad</option>
                                            {localities.map((locality) => (
                                                <option key={locality} value={locality}>
                                                    {locality}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.locality && <span className="text-red-600 text-sm">{errors.locality.message}</span>}
                                    </div>
                                </>
                            )}
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label htmlFor="street" className="block text-sm font-medium">
                                        Calle
                                    </label>
                                    <input
                                        type="text"
                                        id="street"
                                        placeholder="Ingresa tu calle"
                                        {...register("street")}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                    />
                                    {errors.street && <span className="text-red-600 text-sm">{errors.street.message}</span>}
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="number" className="block text-sm font-medium">
                                        Número
                                    </label>
                                    <input
                                        type="text"
                                        id="number"
                                        placeholder="Ingresa tu número"
                                        {...register("number")}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                    />
                                    {errors.number && <span className="text-red-600 text-sm">{errors.number.message}</span>}
                                </div>
                            </div>
                            <div className="flex justify-end gap-4 text-white">
                                <button
                                    type="button"
                                    className="w-full lg:w-[132px] h-[43px] text-center text-base border text-slate-900 border-gray-300 font-semibold rounded hover:bg-gray-500"
                                    onClick={() => router.back()}
                                >
                                    Anterior
                                </button>
                                <button
                                    type="submit"
                                    className="w-full lg:w-[132px] h-[43px] text-white text-center text-base bg-slate-900 font-semibold rounded hover:bg-slate-400"
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
