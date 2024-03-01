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
}

const SelectForm = ({ id, register, errors, fieldName, label, placeholder, data }: Props) => {

    const [valueSelected, setValueSeleted] = React.useState<string>("");

    const handlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSeleted(e.currentTarget.value)
    };

    return (

        <div className='flex flex-col'>
            <label htmlFor={`${fieldName}`} className="block">
                {label}
            </label>
            <select
                id="countries"
                {...register(`${fieldName}`, { required: true })}
                defaultValue={""}
                className={`${valueSelected === "" ? "text-gray-400" : "text-black"} px-4 h-12 rounded-md border focus:outline-none bg-gray-100 w-full ${errors[fieldName] === undefined ? "" : "border-red-500"}`}
                onChange={(e: any) => handlChange(e)}
            >
                <option value="" disabled >{placeholder}...</option>
                {
                    data.map((item: any, index: number) => {
                        return (
                            <option key={`select-form-option-${index}`} value={item.value}>{item.title}</option>
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