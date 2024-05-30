"use client"
import React, {useState, useEffect} from "react"
import {Profession,ProfessionState,ProfessionType,Item} from './interface'
import Image from "next/image"
import {searchProfessions} from '../../services/profession.services'
import TableProfessions from "./table-professions"
import {ColumnFilter} from "@tanstack/react-table"
import ReactModal from "react-modal"
import AddModifyForm from "./add-modify"

const items:Item[]=[{state:"",text:"Seleccione un tipo"},{state:ProfessionState.ACTIVE,text:"Activo"},{state:ProfessionState.DELETED,text:"Eliminado"}]
interface prospManageProfessions{type:ProfessionType}

const ManageProfessions:React.FC<prospManageProfessions>=({type})=>{
    const [professions, setProfessions] = useState<Profession[]>([]);
    const [name,setName]= useState<string>('');
    const [state,setState]= useState<string>('');
    const [columnFilters,setColumnFilters]=useState<ColumnFilter[]>([{id:"name",value:name},{id:"state",value:state}])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {setIsModalOpen(true)};
    const closeModal = () => setIsModalOpen(false);

    const fetchProfessions=async () => {
        const br=await searchProfessions({type})
        if (!br.status) {console.log(br);return}
        setProfessions(br.professions as Profession[])
    }

    useEffect(() => {fetchProfessions();},[]);

    const changeState=async (event:any)=>{setState(event.target.value)}
    const changeName=async (event:any)=>{setName(event.target.value)}

    const search=async ()=>{
        if (state!='') {setColumnFilters([{id:"name",value:name},{id:"state",value:state}])}
        else setColumnFilters([{id:"name",value:name}])
    }

    return (
        <div className="flex flex-col h-full bg-white">
            <div className="flex flex-col w-full h-fit shadow-2xl rounded-md bg-[#f3f4f6]">
                <h2 className="p-4 text-4xl text-center font-semibold text-white bg-[#295269]">
                    {type==ProfessionType.PROFESSION?"Gestión de Profesiones.":type==ProfessionType.SERVICE?"Gestión de Servicios.":"Gestion de Comercios."}
                </h2>
                <h2 className="m-3 text-2xl text-center font-semibold text-slate-700">
                    {type==ProfessionType.PROFESSION?"Lista de Profesiones.":type==ProfessionType.SERVICE?"Lista de Servicios.":"Lista de Comercios."}
                </h2>
                <div className="flex p-2">
                    <div className="flex sm:flex-col sm:flex-1 md:flex-row flex-wrap bg-[#f3f4f6]">
                        <div className="flex">
                            <label htmlFor="name" className="font-semibold block h-fit w-16 text-sm mt-1 p-2">Nombre</label>
                            <input id="name" placeholder="Ingrese un nombre." type='text'autoComplete='off' value={name} onChange={changeName}
                                className="font-semibold block w-64 border border-gray-300 rounded  mt-1 p-2" 
                            />
                            <button type="button" className="h-fit w-fit bg-[#295269] font-semibold text-white rounded hover:bg-slate-500 mt-1 p-2" onClick={search}>
                                <Image src="/asset/icons/lupa2.png" alt="Buscar" width={26} height={26} />
                            </button>
                        </div>
                        <div className="flex">
                            <label htmlFor="state" className="font-semibold block h-fit w-16 text-sm mt-1 p-2">Filtrar</label>
                            <select id="state" value={state} onChange={changeState} className="font-semibold block h-fit w-64 border border-gray-300 rounded mt-1 p-2">
                                {items.map((item,index:number)=>{return (<option key={index} value={item.state}>{item.text}</option>)})}
                            </select>
                        </div>   
                    </div>
                    <button type="submit" className="h-fit w-fit bg-[#295269] font-semibold text-white rounded hover:bg-slate-500 mt-1 p-2" onClick={openModal}>Agregar</button> 
                </div>
            </div>
            <div className="block flex-grow">
                <TableProfessions data={professions} setData={setProfessions} columnFilters={columnFilters} type={type}/>
            </div>
            
            <ReactModal isOpen={isModalOpen} ariaHideApp={false} className="bg-white rounded-lg shadow-lg max-w-md mx-auto mt-52">
                <AddModifyForm add={true} closeModal={closeModal} title="Agregar" type={type} data={professions} setData={setProfessions}/>
            </ReactModal>
        </div>
    )
}
export default ManageProfessions;