import { useEffect, useState } from 'react'
import Footer from '../../Componentes/Footer'
import Header from '../../Componentes/Header'
import Login from '../Login'
import Mapa from '../../Componentes/Mapa'
import './Main.css'


const Main = (props) => {

    const anuncio_1= ''
    const anuncio_2 = ''




    return (
        <div className='main'>
            <Header estaLogado={props.status} />
            <Mapa/>
            <div className='adoção'>
                <hr></hr>
                <h1> Aumigos para adoção por perto </h1>
                {props.caes.map
                (caomain =>
                    <div key={caomain.id} className='caesmain'>
                        <img src={caomain.imagem} alt='' />
                        <h2>{caomain.nome}</h2>
                        <big>{caomain.sexo}</big>
                        <p>{caomain.descricao}</p>
                    </div>
                )}
                <hr></hr>
                <h1><strong>Parceiros</strong></h1>
                <div className='parceiros'>
                    <img src = '' alt = ''> </img>
                    <img src = '' alt = ''> </img>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Main