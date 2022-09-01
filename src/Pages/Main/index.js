import { useEffect, useState } from 'react'
import Footer from '../../Componentes/Footer'
import Header from '../../Componentes/Header'
import Login from '../Login'
import Mapa from '../../Componentes/Mapa'
import './Main.css'


const Main = (props) => {






    return (
        <div className='main'>
            <Header estaLogado={props.status} />
            <Mapa/>
            <div className='adoção'>
                <h1> Aumigos para adoção por perto </h1>
                {props.caes.map
                (cao =>
                    <div key={cao.id} className='cachorro-1'>
                        <img src={cao.imagem} alt='' />
                        <h2>{cao.nome}</h2>
                        <big>{cao.raça}</big>
                        <p>{cao.sexo}</p>
                        <p>{cao.descricao}</p>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}


export default Main