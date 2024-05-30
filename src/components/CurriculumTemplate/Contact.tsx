'use-client'
import React from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { User } from '@/models/user.model';
import { convertDataToHTMLform } from '@/utils/convert.file';

interface Props {
  user: User;
}

const Contact = ({ user }: Props) => {
  const form = React.useRef();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<
    {
      name: string,
      email: string,
      message: string,
    }>();
  const [disabledBtn, setDisableBtn] = React.useState(false)
  const sendEmail = async (data: any) => {
    setDisableBtn(true)
    let formData: any = {
      to_name: user.firstName,
      to_email: user.email,
      from_name: data.name,
      from_email: data.email,
      from_message: data.message
  }
  const formCurrent = convertDataToHTMLform(formData)
  try {
      await emailjs.sendForm('service_e12e5im', 'template_cp2nein', formCurrent, { publicKey: 'J6d1MFSmExd0eam3p' });
      console.log('SUCCESS!');
      reset()
  } catch (error: any) {
      console.log("ERROR");
  }
    setDisableBtn(false)
  }

  return (
    <div className="container mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px] ">
      <div className="pt-12 pb-4">
        <h2 className="text-4xl font-medium mb-2.5 text-white">
          Quiero más información
        </h2>
        <div className="border-2 mb-16  md:p-[48px] p-4 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px] mt-8">
          <form id="myForm" onSubmit={handleSubmit(sendEmail)}>
            <div className="relative z-0 w-full mt-[40px] mb-8 group">
              <input
                type="text"
                {...register('name', { required: true })}
                className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                Nombre *
              </label>
            </div>
            <div className="relative z-0 w-full mb-8 group">
              <input
                {...register('email', { required: true })}
                type="email"
                className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                placeholder=" "
                id="user_email"
                required />
              <label
                htmlFor="user_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                Email *
              </label>
            </div>
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                {...register('message', { required: true })}
                className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                placeholder=" "
                id="message"
                required />
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">
                Mensaje *
              </label>
            </div>
            <div className="transition-all duration-300 ease-in-out inline-block bg-[#111111] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg mt-3">
              <input
                type="submit"
                disabled={disabledBtn}
                className=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white text-gray-500 "
                value="Enviar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact