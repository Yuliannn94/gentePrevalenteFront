import React from 'react'


const NavBar = () => {
    return (
        <div>
            <ul className="NavBar GrayNavBarGDM items-center flex text-white justify-between">
                <ol className="flex items-center m-12">
                    <i className="App-logo fas fa-brain text-yellow-500" />
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
