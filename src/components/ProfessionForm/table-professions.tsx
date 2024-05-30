import { useReactTable,ColumnDef,getCoreRowModel,flexRender,getPaginationRowModel,getSortedRowModel,getFilteredRowModel,SortingState,ColumnFilter, PaginationState} from "@tanstack/react-table"
import { BackendResponse, Profession, ProfessionState,ProfessionType } from "./interface"
import React, {useState} from "react"
import Image from "next/image"
import ReactModal from "react-modal"
import AddModifyForm from './add-modify'
import {deleteProfession as removeProfession,deleteCommerce,deleteService} from '../../services/profession.services'

interface tableProps{
    data:Partial<any>[]
    setData:any
    columnFilters:ColumnFilter[]
    type:ProfessionType
}

const TableProfessions:React.FC<tableProps> = ({data,setData,columnFilters,type}) =>{
    const [profession,setProfession]=useState<Partial<Profession>>({})
    const updateProfession=(original:Profession)=>()=>{
        setProfession(original)
        openModal()
    }
    const deleteProfession=async(profession:Profession)=>{
        let br:BackendResponse
        switch (profession.type) {
            case ProfessionType.PROFESSION:
                br=await removeProfession({id:profession.id} as Profession)
            break
            case ProfessionType.SERVICE:
                br=await deleteService({id:profession.id} as Profession)
            break
            case ProfessionType.COMMERCE:
                br=await deleteCommerce({id:profession.id} as Profession)
            break
        }
        if (!br.status) {console.log(br.message); return}
        const newProfession=br.profession
        const newData=data.map((element)=>element.id==newProfession?.id?newProfession:element)
        setData(newData)
    }
    const columns: ColumnDef<any>[]=[
        {header:"Nombre",accessorKey:"name",enableColumnFilter:true},
        {header:"Descripción",accessorKey:"description"},
        {header:"Estado",accessorKey:"state", cell:info=>info.getValue()==ProfessionState.ACTIVE?"Activo":"Eliminado",enableColumnFilter:true},
        {header:"Acciones", accessorKey:"actions",cell:({row})=>(
            <div className="flex flex-row justify-center space-x-4">
                <Image src="/asset/icons/editar.png" alt="Editar" width={32} height={32} onClick={updateProfession(row.original)}/>
                <Image src="/asset/icons/eliminar.png" alt="Eliminar" width={32} height={32} onClick={() => deleteProfession(row.original)}/>
            </div> 
        ),},
    ]

    const [sorting,setSorting]=useState<SortingState>([{ id: 'name', desc: false }])
    const [pagination,setPagination]=useState<PaginationState>({pageIndex:0,pageSize:6})
    const table=useReactTable({columns,data,getCoreRowModel:getCoreRowModel(),getPaginationRowModel:getPaginationRowModel(),
        getSortedRowModel:getSortedRowModel(),getFilteredRowModel:getFilteredRowModel(),state:{sorting,columnFilters,pagination},
        onPaginationChange:setPagination,onSortingChange:setSorting,enableSortingRemoval:false})
    const [isModalOpen, setIsModalOpen]=useState(false);
    const openModal = () => {setIsModalOpen(true)};
    const closeModal = () => {setIsModalOpen(false)};

    return (
        <div className="flex flex-col h-full">
            <div className="flex overflow-y-auto w-full">
                <table className="max-h-fit min-w-full divide-y divide-[#e7e7e7]">
                    <thead className="bg-[#295269] text-white">
                        {table.getHeaderGroups().map(headerGroup=>(
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header=>{
                                    switch (header.id) {
                                        case "description":
                                            return <th key={header.id} className="w-2/5 py-3 px-2 ff-roboto text-sm font-semibold text-ellipsis sticky top-0" onClick={header.column.getToggleSortingHandler()}>
                                                {header.column.columnDef.header?.toString()}
                                                {header.column.getIsSorted()!=false?header.column.getIsSorted()!="asc"?"▲":"▼":""}
                                            </th>
                                        default:
                                            return <th key={header.id} className="w-1/5 py-3 px-2 ff-roboto text-sm font-semibold" onClick={header.column.getToggleSortingHandler()}>
                                                {header.column.columnDef.header?.toString()}
                                                {header.column.getIsSorted()!=false?header.column.getIsSorted()!="asc"?"▲":"▼":""}
                                            </th>
                                    } 
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody className="overflow-auto">
                        {table.getRowModel().rows.map(row=>(
                              <tr key={row.id}>
                                {row.getVisibleCells().map(cell=>{
                                    switch(cell.column.id) {
                                        case "description":
                                            return <td key={cell.id} className="w-2/5 py-2 px-2 ff-roboto text-sm text-center text-ellipsis">
                                                {flexRender(cell.column.columnDef.cell,cell.getContext())}
                                            </td>
                                        default:
                                            return <td key={cell.id} className="w-1/5 py-2 px-2 ff-roboto text-sm text-center">
                                                {flexRender(cell.column.columnDef.cell,cell.getContext())}
                                            </td>
                                    }
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col flex-1 order-last h-full">
                <div className="flex flex-row justify-end space-x-1 mt-auto p-4">
                    <button className="w-24 ff-roboto bg-[#295269] font-medium text-white rounded hover:bg-slate-500 mt-1 p-2" onClick={()=>table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>Primera</button>
                    <button className="w-24 ff-roboto bg-[#295269] font-medium text-white rounded hover:bg-slate-500 mt-1 p-2" onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>Anterior</button>
                    <button className="w-24 ff-roboto bg-[#295269] font-medium text-white rounded hover:bg-slate-500 mt-1 p-2" onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>Siguiente</button>
                    <button className="w-24 ff-roboto bg-[#295269] font-medium text-white rounded hover:bg-slate-500 mt-1 p-2" onClick={()=>table.setPageIndex(table.getPageCount()-1)} disabled={!table.getCanNextPage()}>Ultima</button>
                </div>
            </div>
            <ReactModal isOpen={isModalOpen} ariaHideApp={false} className="bg-white rounded-lg shadow-lg max-w-md mx-auto mt-52">
                <AddModifyForm add={false} closeModal={closeModal} title="Modificar Profesión" 
                type={type} profession={profession as Profession} data={data as Profession[]} setData={setData}/>
            </ReactModal>
        </div>
        

    )
}

export default TableProfessions