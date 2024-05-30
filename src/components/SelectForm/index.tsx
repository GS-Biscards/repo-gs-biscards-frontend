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
    style?: any,
    classprop?:string,
    styleLabel?:string,
    value?:string
}

const SelectForm = ({ id, register, errors, fieldName, label, placeholder, data, itemValue, itemDescription, defoultValue, style, classprop, styleLabel, value}: Props) => {

    const [valueSelected, setValueSeleted] = React.useState<string>(defoultValue ? defoultValue : "");

    const handlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      

            setValueSeleted(e.currentTarget.value);
            setValueSeleted(e.currentTarget.value)
    };

    return (

        <div className={`flex flex-col w-full  ${classprop }`}>
            <label htmlFor={`${fieldName}`} className={`block ${styleLabel}`}>
                {label}
            </label>
            <select
                id={id}
                {...register(`${fieldName}`, { required: true })}
                defaultValue={value}
                className={`${valueSelected === "" ? "text-gray-400" : "text-black"} bg-white w-full rounded-lg shadow-md px-4 border border-[#D8D5D5] ff-lato text-md opacity-100  placeholder:text-gray-400  appearance-none focus:border  focus:outline-none focus:border-[#203F51] peer ${errors[fieldName] === undefined ? "" : "border-red-500"}`}
                onChange={(e: any) => handlChange(e)}
                style={style}
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