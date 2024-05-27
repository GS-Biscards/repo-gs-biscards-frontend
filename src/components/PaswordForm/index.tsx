'use client'
import React from 'react';

interface Props {
  id: string,
  register: any,
  errors: any,
  fieldName: string,
  label: string,
  placeholder: string,
  color?: any
  width?: any
}

const PasswordForm = ({ id, register, errors, fieldName, label, placeholder, color, width }: Props) => {
  return (
    <div className='flex flex-col'>
      <label className="ff-roboto block">
        {label}
      </label>
      <input
        id={id}
        {...register(`${fieldName}`, { required: true, pattener: '/$D/' })}
        className={`ff-roboto shadow-md rounded-lg opacity-100 p-2 w-full text-md placeholder:text-gray-400 border-0 border-[1px] border-[#D8D5D5] appearance-none focus:border-[2px] dark:border-[##D8D5D5] dark:focus:border-[#203F51] focus:outline-none focus:ring-0 focus:border-[#203F51] peer ${errors[fieldName] === undefined ? "" : "border-red-500"} `}
        style={`color:${color}, width:${width}`}
        placeholder={placeholder}
        required=""
        type='password'
      />
      <div className='h-6 p-0 m-0'>
        {errors[fieldName] &&
          <span className="ff-roboto text-red-500 text-xs">
            This field is required
          </span>
        }
      </div>
    </div>
  )
}

export default PasswordForm