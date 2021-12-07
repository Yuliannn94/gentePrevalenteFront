import React from 'react'
import Logotipo from '../media/Logo1.png'




const NavBar = () => {
    const Logo = () => {
        return (
          <div className='App-logo'>
            <img src={Logotipo} alt='Logo' />
          </div>
        );
      };
      
    return (
        <div>
            <ul className="NavBar GrayNavBarGDM items-center flex text-white justify-between">
                <ol className="flex items-center mx-12 my-0" >
                    <Logo/>
                    Gente Prevalente
                </ol>

                <ol><i className="fas fa-search" />Buscar...</ol>
                <ol><i className="fas fa-cogs" />Administración</ol>
                <ol><i className="fas fa-suitcase"/>Empleo</ol>
                <ol><i className="fas fa-clipboard-list"/>Mi CV</ol>
                <ol><img/>Perfil</ol>
            </ul>

        </div>
    )
}

export default NavBar
