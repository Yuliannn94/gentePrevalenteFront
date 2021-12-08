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
    <div className="NavBar mx-12 my-0">
      <ul className="items-center mx-12 flex text-white justify-between">
        <ol className="flex items-center font-bold" >
          <Logo />
          Gente Prevalente
        </ol>

        <ol><i className="fas fa-search" />Buscar...</ol>
        <ol><i className="fas fa-cogs" /><span className="font-bold">Administración</span></ol>
        <ol><i className="fas fa-suitcase" /><span className="font-bold">Empleo</span></ol>
        <ol><i className="fas fa-clipboard-list" /><span className="font-bold">Mi CV</span></ol>
        <ol><i className="fas fa-user"/><span className="font-bold">Perfil
          <i className="fas fa-chevron-down" />
        </span></ol>
      </ul>
    </div>
  )
}

export default NavBar
