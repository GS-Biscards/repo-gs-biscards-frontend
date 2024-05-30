'use client'
import React from 'react'

interface Props {
    id: string,
    register: any,
    errors: any,
    fieldName: string,
    label: string,
    placeholder: string,
    data: any[],
    itemValue: any,
    itemDescription: any,
    defoultValue?: any,
}

const SelectForm = ({ id, register, errors, fieldName, label, placeholder, data, itemValue, itemDescription, defoultValue}: Props) => {

    const [valueSelected, setValueSeleted] = React.useState<string>(defoultValue ? defoultValue : "");

    const handlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      

            setValueSeleted(e.currentTarget.value);
            setValueSeleted(e.currentTarget.value)
    };

    return (

        <div className='flex flex-col w-full'>
            <label htmlFor={`${fieldName}`} className="block">
                {label}
            </label>
            <select
                id={id}
                {...register(`${fieldName}`, { required: true })}
                defaultValue={""}
                className={`${valueSelected === "" ? "text-gray-400" : "text-black"} h-[60px] bg-white w-full rounded-lg shadow-md px-4 border border-[#D8D5D5] ff-lato text-md opacity-100  placeholder:text-gray-400  appearance-none focus:border  focus:outline-none focus:border-[#203F51] peer ${errors[fieldName] === undefined ? "" : "border-red-500"}`}
                onChange={(e: any) => handlChange(e)}
            >
                <option value="" disabled >{placeholder}...</option>
                {
                    data.map((item: any, index: number) => {
                        return (
                            <option key={`select-form-option-${index}`} value={item[itemValue]}>{item[itemDescription]}</option>
                        )
                    })
                }
            </select>
            {errors[fieldName] &&
                <span className="text-red-500 text-xs">
                    This field is required
                </span>
            }
        </div>

    )
}

export default SelectForm;