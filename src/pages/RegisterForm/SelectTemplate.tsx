import React from 'react';
import { Template } from '@/models/template.model';

interface Props {
    id: string;
    watch: any;
    errors: any;
    register: any;
    setValue: any;
    fieldName: string;
    templateList: Template[];
}

const SelectTemplate = ({ id, register, errors, fieldName, setValue, watch, templateList }: Props) => {
    const handleRadioChange = (value: string) => {
        setValue(`${fieldName}`, value);
    };

    return (
        <div id={`${id}`}>
            <h4 className="mb-2 text-lg font-medium text-gray-900">
                Seleccione un template:
            </h4>
            <ul className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
                {templateList.map((template: Template, index: number) => {
                    return (
                        <li key={`select-option-item${template.id}`}>
                            <input
                                {...register(`${fieldName}`, { required: true })}
                                type="radio"
                                className="hidden peer"
                                value={template.value}
                                id={`${fieldName}-${template.id}`}
                                onChange={() => handleRadioChange(template.value)}
                            />
                            <label
                                htmlFor={`${fieldName}-${template.id}`}
                                className={`inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 ${errors[fieldName] ? 'border-red-500' : 'border-gray-200'
                                    } rounded-lg cursor-pointer ${watch(`${fieldName}`) === template.value
                                        ? 'peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-blue-600 hover:bg-gray-50'
                                        : ''
                                    }`}
                            >
                                <div className="flex flex-col">
                                    <img
                                        src={template.image}
                                        width="300"
                                        height="300"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-full rounded-lg h-auto"
                                    />
                                    <span className="w-full text-md font-semibold mt-1">{template.name}
                                    </span>
                                </div>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SelectTemplate;