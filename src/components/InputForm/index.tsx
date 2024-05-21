'use client'
import React from 'react';

interface Props {
  id: string,
  register: any,
  errors: any,
  fieldName: string,
  label?: string,
  placeholder: string,
  icon?: any,
  style?: any,
  classprop?:string,
  required: boolean,
}

const InputForm = ({ id, register, errors, fieldName, label, placeholder, icon, style, required, classprop }: Props) => {
  return (
    <div className={`flex flex-col mb-4 lg:mb-0 ${classprop }`}>
      <label className="ff-roboto block mb-1">
        {label}
      </label>
      {/* {icon} */}
      <input
        id={id}
        {...register(`${fieldName}`, { required})}
        className={`ff-roboto shadow-md rounded-lg opacity-100 p-2 w-full text-md placeholder:text-gray-400 border-0 border-[1px] border-[#D8D5D5] appearance-none focus:border-[2px] dark:border-[##D8D5D5] dark:focus:border-[#203F51] focus:outline-none focus:ring-0 focus:border-[#203F51] peer ${errors[fieldName] === undefined ? "" : "border-red-500"}`}
        placeholder={placeholder}
        style={style}
      />
      {required && (
        <div className="h-6 p-0 m-0">
          {errors[fieldName] && (
            <span className="ff-roboto text-red-500 text-xs mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>
      )}
      
    </div>
  )
}

export default InputForm