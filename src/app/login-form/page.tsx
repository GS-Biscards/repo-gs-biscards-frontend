'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import InputForm from '@/components/InputForm';
import PaswordForm from '@/components/PaswordForm';
import Link from 'next/link';

type Props = {}

const page = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<{
    email: string,
    pasword: string
  }>();
  const onLogin = (data: any) => {
    console.log("data", data);

  };
  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-gradient-to-b from-[#203F51] to-[#82AAAA] p-4 flex flex-col items-center justify-center">
        <Image
          src={`/asset/images/landing-page/logo-white-login.png`}
          alt={"logo-guilsoft"}
          quality={100}
          priority
          width={480}
          height={480}
        />
        <span className='ff-roboto text-lg text-[#FFF]'>
          "SIMPLIFICAMOS TU PRESENCIA WEB"
        </span>
      </div>
      <div className=" w-3/5 flex flex-col items-center justify-center ">
        <form onSubmit={handleSubmit(onLogin)} className="w-full">
          <div className='pl-[15%] pr-[40%] flex flex-col gap-2 '>
            <InputForm
              id='user-email-field'
              register={register}
              errors={errors}
              fieldName={'email'}
              label={'Email'}
              placeholder={'Ingresar'}
              required={false}
            />

            <PaswordForm
              id='user-password-field'
              register={register}
              errors={errors}
              fieldName={'password'}
              label={'Contraseña'}
              placeholder={'**********'}
            />

            <PaswordForm
              id='user-password-field'
              register={register}
              errors={errors}
              fieldName={'passwordRepit'}
              label={'Repetir Contraseña'}
              placeholder={'**********'}
              color={"#ffff"}
              width={420}
            />

            <button
              type="submit"
              className="ff-roboto bg-[#203F51] text-white px-4 py-2 rounded-md hover:bg-[#82AAAA] hover:text-[#203F51]"
            >
              Iniciar sesión
            </button>
            <div className='flex w-foll justify-center'>
              <Link
                className="ff-roboto text-[#203F51] hover:text-[#203F51]"
                href={'/register-form'}
              >
                Soy Nuevo
              </Link>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default page