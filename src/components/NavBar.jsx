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

        <ol><i className="fas fa-search p-2" />Buscar...</ol>
        <ol><i className="fas fa-cogs p-2" /><span className="font-bold">Administración</span></ol>
        <ol><i className="fas fa-suitcase p-2" /><span className="font-bold">Empleo</span></ol>
        <ol><i className="fas fa-clipboard-list p-2" /><span className="font-bold">Mi CV</span></ol>
        <ol><i className="fas fa-user p-2"/><span className="font-bold">Perfil
          <i className="fas fa-chevron-down p-2" />
        </span></ol>
      </ul>
    </div>
  )
}

export default NavBar
