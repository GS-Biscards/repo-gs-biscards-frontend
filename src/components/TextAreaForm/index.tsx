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
  lines?:number,
  style?: any,
  classprop?:string,
  styleLabel?:string,
}

const TextAreaForm = ({ id, register, errors, fieldName, label, placeholder, required, lines, style, classprop, styleLabel}: Props) => {
  return (
    <div className={`flex flex-col ${classprop}`}>
      {
        label ?
          <label className={`ff-roboto block mb-1 ${styleLabel}`}>
            {label}
          </label> : null
      }
      <textarea
        id={id}
        {...register(`${fieldName}`, { required: required !== undefined ? required : false })}
        className={`w-full rounded-lg shadow-md p-4 border border-[#D8D5D5] ff-lato text-md opacity-100  placeholder:text-gray-400  appearance-none focus:border  focus:outline-none focus:border-[#203F51] peer ${errors[fieldName] === undefined ? "" : "border-red-500"}`}
        placeholder={placeholder}
        rows={lines}
        style={style}
      />
      <div className='h-6 p-0 m-0'>
      {errors[fieldName] &&
        <span className="ff-lato text-red-500 text-xs">
          El valor no es permitido
        </span>
      }
      </div>
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

export default TextAreaForm