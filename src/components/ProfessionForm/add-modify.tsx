'use client'
import React, { useEffect } from 'react';
import {Item, ProfessionType,BackendResponse, Profession,ProfessionState} from './interface'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {addProfession,updateProfession,addCommerce,addService,updateCommerce,updateService} from '../../services/profession.services'

interface props {
    add:boolean
    closeModal:any
    title:string
    type:ProfessionType
    profession?:Profession
    data:Profession[]
    setData:any
}

const schema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio').min(4,"El nombre debe tener al menos 4 caracteres."),
    description: yup.string().optional().default("").max(40,"La descripcion puede tener maximo 40 caracteres."),
    state:yup.string().required().oneOf(Object.values(ProfessionState))
});
const items:Item[]=[{state:"Indefinido",text:"Indefinido"},{state:ProfessionState.ACTIVE,text:"Activo"},{state:ProfessionState.DELETED,text:"Eliminado"}]

const AddModifyForm:React.FC<props>=({add,closeModal,title,type,profession,data,setData})=>{
    useEffect(() => {
        const textarea=document.getElementById('description')
        const autoResize=()=>{
            if (textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = (textarea.scrollHeight+2) + 'px'
            }
        }
        textarea?.addEventListener('input', autoResize)
        autoResize.call(textarea)
        return () => {textarea?.removeEventListener('input', autoResize);}
    },[])
    useEffect(()=>{ 
        if (!add && profession) {
            setValue("name",profession.name || "",{shouldValidate:false})
            setValue("description",profession.description || "",{shouldValidate:false})
            setValue("state",profession.state || undefined)
        } else if (add) { setValue("state",ProfessionState.ACTIVE)}
    },[])

    const {register,handleSubmit,formState:{errors},setValue}=useForm<{name:string,description:string,state:ProfessionState}>({resolver: yupResolver(schema)})
    const onSubmit=handleSubmit(async (professionForm)=>{
        let br:BackendResponse
        switch(type) {
            case ProfessionType.PROFESSION:
                if (add) {
                    br=await addProfession(professionForm)
                    if (!br.status) {console.log(br.message); return}
                    setData([...data,br.profession])
                } else {
                    const newProfession={...profession,...professionForm} as Profession
                    br=await updateProfession(newProfession)
                    if (!br.status) {console.log(br.message); return}
                    const newData=data.map((element)=>element.id==newProfession.id?newProfession:element)
                    setData(newData)
                }
            break;
            case ProfessionType.COMMERCE:
                if (add) {
                    br=await addCommerce(professionForm)
                    if (!br.status) {console.log(br.message); return}
                    setData([...data,br.profession])
                } else {
                    const newProfession={...profession,...professionForm} as Profession
                    br=await updateCommerce(newProfession)
                    if (!br.status) {console.log(br.message); return}
                    const newData=data.map((element)=>element.id==newProfession.id?newProfession:element)
                    setData(newData)
                }
            break;
            case ProfessionType.SERVICE:
                if (add) {
                    br=await addService(professionForm)
                    if (!br.status) {console.log(br.message); return}
                    setData([...data,br.profession])
                } else {
                    const newProfession={...profession,...professionForm} as Profession
                    br=await updateService(newProfession)
                    if (!br.status) {console.log(br.message); return}
                    const newData=data.map((element)=>element.id==newProfession.id?newProfession:element)
                    setData(newData)
                }
            break;
            default:
                br={status:false,message:"Ocurrio un error inesperado"}
                console.log(br)
        }
        closeModal()
    })
    console.log("errores",errors)
    return (
        <div className='flex flex-col h-full'>
            <button onClick={closeModal} className="px-3 py-1 ff-roboto text-3xl text-white border rounded-lg bg-[#203F51] hover:bg-[#397091] ml-auto">X</button>
            <form className="flex flex-col h-auto pt-4 pr-8 pl-8 pb-8" onSubmit={onSubmit}>
                <h1 className="text-3xl text-center font-bold text-[#203F51] mb-3">{title}</h1>
                <div className='mt-2'>
                    <label htmlFor="name" className="ff-roboto block text-lg font-semibold">
                        Nombre {errors.name?.type=='required' && <span className='ff-roboto text-sm font-semibold text-red-600'>*</span>}
                    </label>
                    <input {...register('name')}
                        id="name"
                        placeholder="Ingresa el nombre."
                        className={errors.name?"block w-full border border-red-600 rounded mt-1 p-2":"block w-full border border-gray-300 rounded mt-1 p-2"}
                        type='text'
                        autoComplete='off'
                    />
                    {errors.name?.message && <span className='ff-roboto block text-red-600'>{errors.name.message}</span>}
                </div>
                { !add &&  
                    <div className='mt-2'>
                        <label htmlFor="state" className="ff-roboto block text-lg font-semibold">Estado</label>
                        <select {...register('state')} id="state" className="block h-fit w-full border border-gray-300 rounded mt-1 p-2">
                            {items.map((item,index:number)=>{return (<option key={index} value={item.state}>{item.text}</option>)})}
                        </select>
                        {errors.name?.message && <span className='ff-roboto block text-red-600'>{errors.name.message}</span>}
                    </div> 
                }
  
                <div className='flex flex-col mt-2'>
                    <label htmlFor="description" className="ff-roboto h-fit block text-lg font-semibold">Descripción</label>
                    <textarea {...register('description')} name="description" id="description" placeholder="Ingresa la descripcion." className="w-full h-fit border border-gray-300 rounded mt-1  p-2"></textarea>
                </div>
                <button type="submit" className="w-full p-2 bg-[#203F51] font-semibold text-white rounded mt-4 hover:bg-slate-500">
                    {add? "Agregar":"Modificar"}
                </button>
                <button type="button" className="w-full p-2 bg-[#203F51] font-semibold text-white rounded mt-4 hover:bg-slate-500" onClick={closeModal}>
                    Cancelar
                </button>
            </form>
        </div>
    )
}

export default AddModifyForm;
