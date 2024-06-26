'use client'
import React, { useState } from 'react';

interface Props {
  id: string;
  register: any;
  errors: any;
  setValue: any;
  fieldName: string;
  fieldBase64: string;
  label: string;

}

function ImageForm({ id, register, errors, setValue, fieldName, fieldBase64, label }: Props) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        const base64String = reader.result?.toString().split(',')[1];
        setValue(`${fieldBase64}`, base64String)
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-col'>
      <label className="block " htmlFor={fieldName}>
        {label}
      </label>
      <input
        {...register(`${fieldName}`, { required: true })}
        className={`appearance-none shadow-md border border-gray-300 rounded-lg opacity-100 p-2 w-full text-md placeholder:text-gray-400 ${errors[fieldName] === undefined ? "" : "border-red-500"} file:text-sm file:text-white  file:rounded-sm file:h-[2.9rem] file:px-2 file:bg-gray-400`}
        aria-describedby="user_profile_help"
        id={id}
        type="file"
        onChange={handleFileChange}
      />
      <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_profile_help">
        A profile picture is useful to confirm you are logged into your account
      </div>
      {errors[fieldName] && <span className="text-red-500 text-xs">This field is required</span>}
    </div>
  );
}

export default ImageForm;