import React from 'react'

import NavBar from '../../components/NavBar'
import LogoEmpresa from '../../media/LogoNegro1.png'

const IndexGestion = () => {
  

    return (
        <div className='w-full h-full space-x-4 flex bg-gray-200'>
            <NavBar />
            <div className='w-full h-full space-x-4 flex bg-gray-200'>
                <div class="w-2/3  max-w-2xl mx-56 my-28 ">
                    <div className='-ml-36 mb-12 mt-0 font-semibold text-gray-800'>Administración / Aprobación de Empresas</div>

                    <div class="bg-white border border-primary rounded-b-lg p-20 flex flex-col rounded-2xl shadow-xl">

                        <div class="text-sm mt-2 text-gray-200">
                            <div class="relative  w-full flex flex-row space-x-6 items-center">
                                <div className="mb-1 bg-transpatent  h-40 w-1/3 flex flex-col">asd</div>
                                <div className="mb-1 bg-gray-100  h-3/4 w-3/4 flex flex-col">
                                    <img className="p-12" src={LogoEmpresa} alt="logoEmpresa" />
                                </div>
                                <div className="mb-1 h-36 w-1/3 flex flex-col items-center justify-center space-y-4">
                                    <div className='relative w-40 h-8 flex items-center bg-white rounded-full text-gray-800 shadow-lg'>
                                        <div className=' flex items-center justify-center text-white text-2xl'><i className='fas fa-check bg-green-600 rounded-full ' /></div>
                                        <div className='text-md font-bold'>Aprobar Empresa</div>
                                    </div>
                                    <div className='relative w-40 h-8 flex items-center bg-white rounded-full text-gray-800 shadow-lg'>
                                        <div className=' flex items-center justify-center text-red-600 text-2xl'><i className='fas fa-times-circle bg-white rounded-full ' /></div>
                                        <div className='text-md font-bold'>Rechazar Empresa</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full pt-8 flex gap-12">
                            <div class="flex flex-col w-1/2 space-y-12">
                                <div class="mb-1 bg-transparent  flex flex-col h-14 w-full">
                                    <span className="text-gray-500 text-xs ">
                                        Nombre de la empresa
                                    </span>
                                    <div className="p-1 pb-3 text-base font-bold border-b-2">
                                        EMPRESA 1
                                    </div>
                                </div>
                                <div class="mb-1 bg-transparent  flex flex-col h-14 w-full">
                                    <span className="text-gray-500 text-xs">
                                        Tipo de identificación
                                    </span>
                                    <div className="p-1 pb-3 text-base font-bold border-b-2">
                                        NIT
                                    </div>
                                </div>
                                <div class="mb-1 bg-transparent  flex flex-col h-14 w-full">
                                    <span className="text-gray-500 text-xs ">
                                        # de empleados
                                    </span>
                                    <div className="p-1 pb-3 text-base font-bold border-b-2 ">
                                        1-15
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-col w-1/2 space-y-12">
                                <div class="mb-1 bg-transparent  flex flex-col h-14 w-full">
                                    <span className="text-gray-500 text-xs ">
                                        Razón Social
                                    </span>
                                    <div className="p-1 pb-3 text-base font-bold border-b-2">
                                        EMPRESA S.A.S.
                                    </div>
                                </div>
                                <div class="mb-1 bg-transparent  flex flex-col h-14 w-full">
                                    <span className="text-gray-500 text-xs ">
                                        Identificación
                                    </span>
                                    <div className="p-1 pb-3 text-base font-bold border-b-2">
                                        654678654657
                                    </div>
                                </div>
                                <div class="mb-1 bg-gray-50 border border-gray-400 rounded-xl h-14 w-full flex items-center font-bold shadow-lg hover:bg-gray-300 cursor-pointer">
                                    <div className="text-blue-400 font-bold ">
                                        <i className="m-2 fas fa-paperclip text-2xl" />
                                    </div>
                                    <button type="button">
                                        <span>Ver archivos aduntos</span>                                        
                                    </button>


                                </div>
                            </div>

                        </div>
                        <div class="py-2 h-20"></div>
                    </div>
                    <div className='flex flex-col items-center content-center m-6 text-gray-500 font'>
                        <div>
                            <i className="fas fa-chevron-circle-left text-2xl hover:text-gray-700 cursor-pointer" />
                            <span >1 de 2 empresas pendientes por aprobación</span>
                            <i className="fas fa-chevron-circle-right text-2xl hover:text-gray-700 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default IndexGestion
