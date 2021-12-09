import React from 'react'
import CardEmpresas from '../components/CardEmpresas';
import CardGestionUsuarios from '../components/CardGestionUsuarios';
import CardEmpleados from '../components/CardEmpleados';
import CardGestionEmpresas from '../components/CardGestionEmpresas';


const Index = () => {
    return (
        <div>
            <div className='w-full h-full space-x- flex bg-transparent'>
                <CardEmpresas />
                <CardGestionEmpresas />

            </div>
            <div className='w-full h-full space-x-4 flex bg-transparent'>
                <CardEmpleados />
                <CardGestionUsuarios />
            </div>
        </div>

    )
}

export default Index
