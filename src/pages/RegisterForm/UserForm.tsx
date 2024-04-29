import React from 'react';
import { useForm } from 'react-hook-form';
import SelectTemplate from './SelectTemplate';
import ImageForm from '@/components/ImageForm';
import InputForm from '@/components/InputForm';
import SelectForm from '@/components/SelectForm';
import { Template } from '@/models/template.model';

interface Props {
    templateList: Template[]
}

const UserForm = ({ templateList }: Props) => {
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<
        {
            profileImg: any,
            profileBase64: string,
            firstName: string,
            template: string
        }>();

    const onSubmit = (data: any) => {
        console.log("data", data);
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
            <div className='flex flex-col'>
                <SelectTemplate
                    watch={watch}
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    id={'user-id-field'}
                    fieldName={'template'}
                    templateList={templateList}
                />

                <ImageForm
                    id='profile-img-field'
                    register={register}
                    errors={errors}
                    setValue={setValue}
                    fieldName={'profileImg'}
                    fieldBase64={'profileBase64'}
                    label={'Profile'}
                />

                <InputForm
                    id='user-id-field'
                    register={register}
                    errors={errors}
                    fieldName={'userId'}
                    label={'Nombre de usuario'}
                    placeholder={'Ingresar'}
                />

                <InputForm
                    id='first-name-field'
                    register={register}
                    errors={errors}
                    fieldName={'firstName'}
                    label={'Nombre'}
                    placeholder={'Ingresar'}
                />

                <InputForm
                    id='last-name-field'
                    register={register}
                    errors={errors}
                    fieldName={'lastName'}
                    label={'Apellido'}
                    placeholder={'Ingresar'}
                />
                <InputForm
                    id='personal-phone-field'
                    register={register}
                    errors={errors}
                    fieldName={'personalPhone'}
                    label={'Telefóno personal'}
                    placeholder={'Ingresar'}
                />
                <InputForm
                    id='work-phone-field'
                    register={register}
                    errors={errors}
                    fieldName={'workPhone'}
                    label={'Telefóno de trabajo'}
                    placeholder={'Ingresar'}
                />
                <SelectForm
                    id={'profession-field'}
                    register={register}
                    errors={errors}
                    fieldName={'profecion'}
                    label={'Profesión'}
                    placeholder={'Seleccionar'}
                    itemValue={'value'} 
                    itemDescription={'title'} 
                    data={[
                        {
                            value: '10000',
                            title: 'Abogacia'
                        },
                        {
                            value: '10001',
                            title: 'Ventas'
                        }
                    ]}
                />
                <SelectForm
                    id={'country-field'}
                    register={register}
                    errors={errors}
                    fieldName={'country'}
                    label={'País'}
                    placeholder={'Seleccionar'}
                    data={[
                        {
                            value: 'AR',
                            title: 'Argentina'
                        },
                        {
                            value: 'BR',
                            title: 'Brasil'
                        }
                    ]} 
                    itemValue={'value'} 
                    itemDescription={'title'}               
                    />
                <SelectForm
                    id={'province-field'}
                    register={register}
                    errors={errors}
                    fieldName={'province'}
                    label={'Provincia'}
                    placeholder={'Seleccionar'}
                    itemValue={'value'} 
                    itemDescription={'title'} 
                    data={[
                        {
                            value: 'AR-JU',
                            title: 'Jujuy'
                        },
                        {
                            value: 'AR-SA',
                            title: 'Salta'
                        }
                    ]}
                />
                <SelectForm
                    id={'locality-field'}
                    register={register}
                    errors={errors}
                    fieldName={'locality'}
                    label={'Localidad'}
                    placeholder={'Seleccionar'}
                    itemValue={'value'} 
                    itemDescription={'title'} 
                    data={[
                        {
                            value: 'Ju-SS',
                            title: 'San Salvador de Jujuy'
                        },
                        {
                            value: 'JU-Pal',
                            title: 'Palpála'
                        }
                    ]}
                />
                <InputForm
                    id='street-field'
                    register={register}
                    errors={errors}
                    fieldName={'street'}
                    label={'Calle'}
                    placeholder={'Ingresar'}
                />
                <InputForm
                    id='street-num-field'
                    register={register}
                    errors={errors}
                    fieldName={'streetNumber'}
                    label={'Numero'}
                    placeholder={'Ingresar'}
                />
                <InputForm
                    id='zipCode-field'
                    register={register}
                    errors={errors}
                    fieldName={'zipCode'}
                    label={'Código'}
                    placeholder={'Ingresar'}
                />


            </div>


            <button type="submit" className="mt-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>

        </form>
    );
};

export default UserForm;