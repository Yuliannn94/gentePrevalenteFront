import React from 'react'

const CardEmpleados = () => {
    return (
        <div className="w-5/12 max-w-2xl m-auto">

            <div className="w-full">
                <div className="w-full bg-transparent h-48 rounded-t-lg"></div>
                <div className="absolute -mt-9 ml-5 flex flex-col items-center">
                    <div className="azul border-gray-400 h-28 w-28 rounded-lg shadow-md border-b border-primary"><i className="fas fa-user-tie p-6   text-white text-6xl" /></div>
                </div>
            </div>

            <div className="bg-primary border border-primary rounded-2xl px-5 py-32 flex flex-col">

                <div className="text-sm  mt-2 text-gray-800">
                    <span className="text-4xl font-normal font-sans">
                        Inscripción de empleados en empresas
                    </span>
                </div>

                <div className="pt-8 flex gap-8">

                </div>

                <div className="w-full border border-primary rounded-2xl">
                    <div className="absolute h-5 w-40 m-5 flex flex-col items-center">
                        <span className="text-gray-500 font-extralight"><i className="fas fa-clock" />3 usuarios sin empresa registrada</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardEmpleados;
