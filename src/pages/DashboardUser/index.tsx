"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../DashboardUser/registerUserStyles.css"

// Define la interfaz de datos del formulario
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumbre: string;
  history: string;
  profileImg: FileList;
}

const DashboardUserPage: React.FC = () => {
  // Estado para la URL de la imagen cargada
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const router = useRouter();

  const [formulario1, setFormulario1] = useState<any>({});

  // Define el esquema de validación usando Yup
  const validationSchema = Yup.object().shape({
    profileImg: Yup.mixed()
      .test("fileFormat", "Solo se aceptan archivos de imagen", (value: any) => {
        if (!value || !(value instanceof FileList) || value.length === 0) return true; // Permitir que sea opcional
        const acceptedFormats = ["image/png", "image/jpeg"];
        return acceptedFormats.includes(value[0].type);
      })
      .required("Debe cargar una imagen de perfil"),
    firstName: Yup.string()
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      " Por favor, ingrese su nombre"
      )
      .required("El nombre es obligatorios"),
    lastName: Yup.string()
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        " Por favor, ingrese su apellido"
      )
      .required("El apellido es obligatorios"),  
    email: Yup.string()
      .email("Formato de email inválido")
      .required("El email es obligatorio"),
    phoneNumbre: Yup.string()
      .matches(/^[0-9]+$/, "El teléfono solo debe contener números")
      .min(10, "El teléfono debe tener al menos 10 dígitos")
      .required("El teléfono es obligatorio"),
    history: Yup.string().required("Este campo es obligatorio"),
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
  const onNext: SubmitHandler<FormData> = async (data) => {
    console.log("data", data);
    localStorage.setItem("formulario1", JSON.stringify(data));
    router.push("/register-user2/paso2");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-8 my-4 ff-poppins">
      <div className="bg-white shadow-2xl rounded-md overflow-hidden">
        <div className="grid grid-cols-1 w-auto lg:grid-cols-2 lg:w-full md:w-full ">
          <div className="flex flex-col  bg-white md:items lg:ml-16 lg:p-12 sm:p-8 px-4 sm:mx-4">
          <div className="flex flex-col  bg-white md:items-center ">
            <img
              className="w-full max-w-xs lg:max-w-none lg:w-auto h-auto lg:h-[150px]  object-contain my-10"
              alt="Logo GF"
              src="/asset/images/LOGOTIPO-TRANSPARENTE_Mesa-de-trabajo-1.png"
            />
            </div>
              <h2 className="text-2xl font-bold text-slate-800">Plantillas</h2>
              <hr className="h-px mb-8 bg-slate-800 border-1 rounded"/>        

            <Slider {...settings} className="w-full lg:w-[120%] ">
              {/* card mas chica con imagen al costado  
              <div className="bg-white rounded-lg  lg:h-50 shadow-lg overflow-hidden flex-shrink-0 w-auto card">
                <img
                  className="w-full sm:w-64 sm:rounded-l-2xl sm:border-2 sm:absolute  object-cover object-center"
                  src="/asset/images/1.png"
                  alt="Card image"
                />
                <div className="p-4 sm:text-right">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    Template Básico
                  </h2>
                  <p className="text-gray-700">Subtítulo de la tarjeta</p>
                  <div className="flex justify-end gap-4 mt-4">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded">
                      Ver más
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded">
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-auto card">
                <img
                  className="w-full h-50 object-cover object-center"
                  src="/asset/images/1.png"
                  alt="Card image"
                />
                <div className="p-4 text-center">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    Template Basico
                  </h2>
                  <p className="text-gray-700">Subtítulo de la tarjeta paga</p>
                  <div className="flex justify-end gap-4 mt-4 ">
                    <button className="px-4 py-2 bg-gray-400 text-sm  text-white rounded">
                      Ver más
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded">
                      Seleccionar
                    </button>
                    
                  </div>
                </div>
              </div>
              <div className=" bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-auto card">
                 {/* etiqueta de template premiun */}
                <div className="">
                  <img
                  className="w-full  h-30 object-cover object-center"
                  src="/asset/images/photo.png"
                  alt="Card image"  
                  />
                  <div className="text-[10px] absolute inline-flex items-center my-0 mx-4 bg-[#fdbc68] px-3 rounded-b-xl">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"></path></svg>
                    <span><b>Pro</b></span>
                    </div>
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    Template Premium
                  </h2>
                  
                  <p className="text-gray-700">Subtítulo de la tarjeta paga</p>
                  <div className="flex justify-end gap-4 mt-4">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded">
                      Ver más
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded">
                      Seleccionar
                    </button>
                    
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-auto card">
                <img
                  className="w-full h-30 object-cover object-center"
                  src="/asset/images/1b.png"
                  alt="Card image"
                />
                <div className="p-4 text-center">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    Template Basico
                  </h2>
                  <p className="text-gray-700">Subtítulo de la tarjeta paga</p>
                  <div className="flex justify-end gap-4 mt-4">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded">
                      Ver más
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded">
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-auto card">
                {/* etiqueta de template premiun */}
                <div className="">
                  <img
                  className="w-full  h-30 object-cover object-center"
                  src="/asset/images/2.png"
                  alt="Card image"  
                  />
                  <div className="text-[10px] absolute inline-flex items-center my-0 mx-4 bg-[#fdbc68] px-3 rounded-b-xl">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill="currentColor" d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"></path></svg>
                    <span><b>Pro</b></span>
                    </div>
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-gray-900 font-bold text-xl mb-2">
                    Template Premium
                  </h2>
                  <p className="text-gray-700">Subtítulo de la tarjeta paga</p>
                  <div className="flex justify-end gap-4 mt-4">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded">
                      Ver más
                    </button>
                    <button className="px-4 py-2 bg-gray-800 text-white rounded">
                      Seleccionar
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
            
          </div>
          <form
            onSubmit={handleSubmit(onNext)}
            className="flex flex-col justify-center w-full max-w-sm m-auto p-8 lg:p-4 md:text-md lg:text-lg"
          >
            <h2 className="text-2xl text-center font-bold text-slate-800 mb-4">Mis Datos Personales</h2>
            <div className="flex flex-col justify-center items-center mb-3">
              <label htmlFor="file_input" className="relative cursor-pointer">
                <div className="w-32 h-32 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Vista previa"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      />
                    </svg>
                  )}
                </div>
                <input
                  type="file"
                  id="file_input"
                  className="hidden "
                  {...register("profileImg")}
                />
              </label>
              <div
                className="mt-1 text-center block text-sm text-gray-500"
                id="file_input_help"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 inline-block mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                  <span className="text-sm ">Ingresa tu imagen de perfil</span>
                </div>
                <span className="text-xs">(PNG, JPG (MAX. 800x400px)).</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full text-gray-700 ">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium">
                  Nombre 
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Ingresa tu nombre "
                  {...register("firstName")}
                  className="mt-1 block w-full p-2 border text-sm border-gray-300 rounded"
                />
                {errors.firstName && (
                  <span className="text-red-600 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Ingresa tu apellido"
                  {...register("lastName")}
                  className="mt-1 block w-full  p-2 border text-sm border-gray-300 rounded"
                />
                {errors.lastName && (
                  <span className="text-red-600 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Ingresa tu email"
                  {...register("email")}
                  className="mt-1 block w-full p-2 border text-sm border-gray-300 rounded"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label htmlFor=" phoneNumbre" className="block text-sm font-medium">
                  Teléfono
                </label>
                <input
                  type="text"
                  id=" phoneNumbre"
                  placeholder="Ingresa tu teléfono"
                  {...register("phoneNumbre")}
                  className="mt-1 block w-full p-2 border text-sm border-gray-300 rounded"
                />
                {errors.phoneNumbre && (
                  <span className="text-red-600 text-sm">
                    {errors.phoneNumbre.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="history"
                  className="block text-sm font-medium"
                >
                  Sobre mi
                </label>
                <textarea
                  id="history"
                  placeholder="Cuentanos a que te dedicas.."
                  {...register("history")}
                  className="mt-1 block w-full p-2 border text-sm border-gray-300 rounded"
                  rows={4}
                />
                {errors.history && (
                  <span className="text-red-600 text-sm">
                    {errors.history.message}
                  </span>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-[132px] h-[43px]  text-center text-base bg-slate-800 font-semibold text-white rounded mt-4 hover:bg-slate-500"
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

export default DashboardUserPage;


