    "use client";
    import React, { useState, useEffect } from "react";
    import { useForm, SubmitHandler } from "react-hook-form";
    import { yupResolver } from "@hookform/resolvers/yup";
    import * as Yup from "yup";
    import { useRouter } from "next/navigation";

    // Define la interfaz de datos del formulario
    interface FormData {
    tipoUser: string;
    profesion?: string;
    rol_cargo?: string;
    rubro_comercio?: string;
    servicio?: string;
    documentPdf: FileList;
    }

    const DashboardUserAboustMePage: React.FC = () => {
    const router = useRouter();
    const [tipoUsuario, setTipoUsuario] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const [formulario2, setFormulario2] = useState<FormData | null>(null);

    // Define el esquema de validación usando Yup
    const validationSchema = Yup.object().shape({
    tipoUser: Yup.string().required("El tipo de usuario es obligatorio"),
    profesion: Yup.string()
    .when('tipoUser',([tipoUser]) =>{
        // is: (tipoUser: string) => tipoUser === 'Persona Física',
    console.log("que tiene tipo user",(tipoUser))
    return (tipoUser ==="Persona Fisica" ?
    Yup.string().required("La profesión es obligatoria"): Yup.string())

    }),
    rol_cargo: Yup.string()
    .when('tipoUser',([tipoUser]) =>{
        return (tipoUser ==="Persona Física" ?  
        Yup.string().required("El rol o cargo es obligatorio") : Yup.string())
    }),
    rubro_comercio: Yup.string()
    .when('tipoUser',([tipoUser]) =>{
        console.log("que tiene tipo user juridica",(tipoUser))
        return (tipoUser ==="Persona Jurídica" ?  
        Yup.string().required("El rubro o comercio es obligatorio") : Yup.string())
    }),
    servicio: Yup.string()
    .when('tipoUser',([tipoUser]) =>{
        console.log("que tiene tipo user juridica",(tipoUser))
        return (tipoUser ==="Persona Jurídica" ?  
        Yup.string().required("El servicio es obligatorio") : Yup.string())
    }),

//   rol_cargo: Yup.string().when('tipoUser', {
//     is: (tipoUser: string) => tipoUser === 'Persona Física',
//     then: Yup.string().required("El rol o cargo es obligatorio"),
//     otherwise: Yup.string(),
//   }),
//   rubro_comercio: Yup.string().when('tipoUser', {
//     is: (tipoUser: string) => tipoUser === 'Persona Jurídica',
//     then: Yup.string().required("El rubro o comercio es obligatorio"),
//     otherwise: Yup.string(),
//   }),
//   servicio: Yup.string().when('tipoUser', {
//     is: (tipoUser: string) => tipoUser === 'Persona Jurídica',
//     then: Yup.string().required("El servicio es obligatorio"),
//     otherwise: Yup.string(),
//   }),
//   documentPdf: Yup.mixed()
//     .required("Por favor, sube un archivo PDF")
//     .test("fileSize", "El archivo es muy grande", (value: any) => value && value[0].size <= 5000000)
//     .test("fileType", "El archivo debe ser un PDF", (value: any) => value && value[0].type === "application/pdf"),
});

    // Opciones para las listas desplegables
    const tipoUser = ["Persona Física", "Persona Jurídica"];
    const profesion = ["Abogado", "Ingeniero", "Profesor", "Contador", "Otro"];
    const rubro_comercio = [
        "Turístico",
        "Alimenticio",
        "Artesano",
        "Electrodomésticos",
        "Industrial",
        "Otro",
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
    const onNext: SubmitHandler<FormData> = (data) => {
        console.log("data", data);
        localStorage.setItem("formulario2", JSON.stringify(data));
        router.push("/register-user2/paso4");
    };

    // Maneja el cambio de tipo de usuario
    const handleTipoUserChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setTipoUsuario(event.target.value);
    };

    // Maneja el cambio de archivo
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        setFileName(file.name);
        } else {
        setFileName("");
        }
    };

    useEffect(() => {
        const savedData = localStorage.getItem("formulario2");
        if (savedData) {
        setFormulario2(JSON.parse(savedData));
        }
    }, []);

    return (
        <div className="px-8 my-10 ff-poppins">
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
                <h2 className="text-2xl text-center font-bold mb-6 text-slate-700">
                Acerca de mi
                </h2>
                <div className="flex flex-col gap-4 w-full text-gray-700">
                <div>
                    <label htmlFor="tipoUser" className="block text-sm font-medium">
                    Tipo de Usuario
                    </label>
                    <select
                    id="tipoUser"
                    {...register("tipoUser")}
                    onChange={handleTipoUserChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    required
                    >
                    <option value="">Selecciona el tipo de usuario</option>
                    {tipoUser.map((tipo) => (
                        <option key={tipo} value={tipo}>
                        {tipo}
                        </option>
                    ))}
                    </select>
                    {errors.tipoUser && (
                    <span className="text-red-600 text-sm">
                        {errors.tipoUser.message}
                    </span>
                    )}
                </div>
                {tipoUsuario === "Persona Física" && (
                    <>
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
                        required
                        >
                        <option value="">Selecciona tu profesión</option>
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
                        placeholder="Ingresa tu rol o cargo"
                        {...register("rol_cargo")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                        />
                        {errors.rol_cargo && (
                        <span className="text-red-600 text-sm">
                            {errors.rol_cargo.message}
                        </span>
                        )}
                    </div>
                    </>
                )}
                {tipoUsuario === "Persona Jurídica" && (
                    <>
                    <div>
                        <label
                        htmlFor="rubro_comercio"
                        className="block text-sm font-medium"
                        >
                        Rubro o Comercio
                        </label>
                        <select
                        id="rubro_comercio"
                        {...register("rubro_comercio")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                        >
                        <option value="">Selecciona tu rubro o comercio</option>
                        {rubro_comercio.map((rubro) => (
                            <option key={rubro} value={rubro}>
                            {rubro}
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
                        <label
                        htmlFor="servicio"
                        className="block text-sm font-medium"
                        >
                        Servicio
                        </label>
                        <input
                        type="text"
                        id="servicio"
                        placeholder="Ingresa tu servicio "
                        {...register("servicio")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        required
                        />
                        {errors.servicio && (
                        <span className="text-red-600 text-sm">
                            {errors.servicio.message}
                        </span>
                        )}
                    </div>
                    </>
                )}
                <div>
                    <label
                    htmlFor="file_input"
                    className="block text-sm font-medium"
                    >
                    Documento PDF
                    </label>
                    <div className="mt-1 flex justify-between items-center border border-gray-300 rounded">
                    <div className="relative">
                        <input
                        type="file"
                        id="file_input"
                        {...register("documentPdf")}
                        onChange={handleFileChange}
                        className="absolute inset-0 w-16 h-full opacity-0 cursor-pointer"
                        accept=".pdf"
                        />
                        <label
                        htmlFor="file_input"
                        className="p-2 bg-slate-900 hover:bg-slate-800 rounded-l text-white flex items-center cursor-pointer w-full"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5 text-white"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                            />
                        </svg>
                        <span className="ml-2 text-sm text-center ">
                            Subir archivo
                        </span>
                        </label>
                    </div>
                    <input
                        type="text"
                        readOnly
                        value={
                        fileName ? ` ${fileName}` : "Por ej: cv, menú, etc.."
                        }
                        className={`block text-sm ${
                        fileName ? "text-green-600" : "text-red-600"
                        } w-52 p-1 rounded`}
                        style={{ border: "none" }}
                    />
                    </div>
                    {errors.documentPdf && (
                    <span className="text-red-600 text-sm">
                        {errors.documentPdf.message}
                    </span>
                    )}
                </div>

                <div className="flex justify-end gap-4 text-white">
                    <button
                    type="button"
                    className="w-[132px] h-[43px] text-center text-base border text-slate-900 border-gray-300 font-semibold rounded hover:bg-gray-500"
                    onClick={() => router.back()}
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
