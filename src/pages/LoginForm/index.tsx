"use client" 
import LoginForm from "@/components/LoginInput";
import React from "react";
import { useForm } from "react-hook-form";

const fields = [
    {
        label: "Email",
        type: "email",
        placeholder: "Mark.tomson@gmail.com",
        required: true,
    },
    {
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        required: true,
    },
    {
      label:"remember",
      type: "checkbox",
      required:false,
    },
    {
      label
    }
];

export default function LoginFormPage() {
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
    const onSubmit = (data: any) => {
        //autenticacion
      console.log(data);
    };
    
    return (
    <div className="container mx-auto">
        <div className="flex flex-wrap justify-center p-0 shadow-2xl my-20 rounded-md mx-auto">
          <div className=" flex w-full items-start relative bg-white">
            <div className="flex items-start relative bg-[#ffffff] w-full">
                  <div className="flex flex-col w-[650px] h-[989px] items-center justify-center gap-[30px] relative [background:linear-gradient(180deg,rgb(32,63,81)_0%,rgb(130,170,170)_100%)]">
                    <img
                      className="relative w-[469px] h-[469px] object-cover"
                      alt="Logo BLANCO"
                      src="\asset\images\LOGO BLANCO TRANSPARENTE_Mesa_de_trabajo1.png"
                    />
                    <div className="relative w-[512px] h-[37px] [font-family:'Roboto-Light',Helvetica] font-light text-[#ffffff] text-[25px] tracking-[0] leading-[normal]">
                      “SIMPLEMENTE TU PRESENCIA WEB”
                    </div>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}className=""> 
                    <div className="overflow-hidden pl-[189px] pr-[115px] pt-[200px] pb-[250px] flex flex-col gap-2.5 items-center relative w-[785px] h-[989px] bg-transparent">
                      <div className=" flex flex-col gap-1 items-center relative bg-transparent">
                        <LoginForm
                              emailId='user-email-field'
                              passwordId=""
                              register={register}
                              errors={errors}
                              emailFieldName={'email'}
                              emailLabel={'Email'}
                              emailPlaceholder={'Ingrese su email'}
                              passwordFieldName={'contraseña'}
                              passwordLabel={'Contraseña'}
                              passwordPlaceholder={'Ingrese su contraseña '}
                              rememberId = {'remember'}
                              rememberLabel= {'Mantener sesión iniciada'}
                          />
                          <div className="underline text-base text-[#2f3888] ">                  
                                  <a href="" >Soy nuevo</a>
                          </div>
                      </div>
                      </div>  
                  </form>
            </div>
          </div>
        </div>
      </div>

    );
};