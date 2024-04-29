'use client'
import React from 'react';

interface Props {
  id: string,
  register: any,
  errors: any,
  fieldName: string,
  label: string,
  placeholder: string,
  required?: boolean,
  lines?:number
}

const TextAreaForm = ({ id, register, errors, fieldName, label, placeholder, required, lines}: Props) => {
  return (
    <div className='flex flex-col'>
      <label className="ff-lato block">
        {label}
      </label>
      <textarea
        id={id}
        {...register(`${fieldName}`, { required: required !== undefined ? required : false })}
        className={`w-full rounded-lg shadow-md p-4 border border-[#D8D5D5] ff-lato text-md opacity-100  placeholder:text-gray-400  appearance-none focus:border  focus:outline-none focus:border-[#203F51] peer ${errors[fieldName] === undefined ? "" : "border-red-500"}`}
        placeholder={placeholder}
        required=""
        rows={lines}
      />
      <div className='h-6 p-0 m-0'>
      {errors[fieldName] &&
        <span className="ff-lato text-red-500 text-xs">
          El valor no es permitido
        </span>
      }
      </div>
      
    </div>
  )
}

export default TextAreaForm