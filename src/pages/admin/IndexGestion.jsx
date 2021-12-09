import React from 'react'
import NavBar from '../../components/NavBar'
import LogoEmpresa from '../../media/LogoNegro1.png'

const IndexGestion = () => {
    return (
        <div className='w-full h-full space-x-4 flex bg-transparent'>
            <NavBar />
            <div className='w-full h-full space-x-4 flex bg-transparent'>
                <div class="w-2/3  max-w-2xl mx-56 my-28 ">
                    <div className='mb-12 mt-0 font-bold text-gray-800'>Administración / Aprobación de Empresas</div>

                    <div class="bg-primary border border-primary rounded-b-lg p-20 flex flex-col rounded-2xl shadow-xl">

                        <div class="text-sm mt-2 text-gray-200">
                            <div class="relative mx-20 flex flex-row space-x-14 items-center">
                                <div class="mb-1 bg-transpatent  h-40 w-44 flex flex-col">
                                    <img src={LogoEmpresa} alt="logoEmpresa" />
                                </div>
                                <div class="mb-1 h-36 w-36 flex flex-col items-center justify-center space-y-4">
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

                        <div class="pt-8 flex gap-8">
                            <div class="flex flex-col">
                                <div class="mb-1 bg-green-200 border border-gray-300 h-5 w-20"></div>
                                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            </div>
                            <div class="flex flex-col">
                                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            </div>
                            <div class="flex flex-col">
                                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            </div>
                            <div class="flex flex-col">
                                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                                <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-20"></div>
                            </div>
                        </div>
                        <div class="py-5 break-all bbcode">
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-44"></div>
                            <div class="mb-1 bg-gray-200 border border-gray-300 h-5 w-full h-40"></div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default IndexGestion
