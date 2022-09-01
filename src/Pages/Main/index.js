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
                <div className='cachorro-1'>
                    <img src='' alt='' />
                    <h2>SIMBA</h2>
                    <big>Macho</big>
                    <p>Simba resgatado e bem novinho,um cachorro bem feliz e amoroso.</p>
                </div>
                <div className='cachorro-2'>
                    <img src='' alt='' />
                    <h2>JADE</h2>
                    <big>   Fêmea</big>
                    <p>Cheia de personalidade e energia.Dócil e se da super bem com crianças.</p>
                </div >
                <div className='cachorro-3'>
                    <img src='' alt='' />
                    <h2>CACAU</h2>
                    <big>Fêmea</big>
                    <p>Tímida,pórem companheira.Cacau já foi vacinada e vermífugada.</p>
                </div>
                <div className='cachorro-4'>
                    <img src='' alt='' />
                    <h2>PITOCO</h2>
                    <big>Macho</big>
                    <p>Esse é o Pitoco e alegria e animação é com esse cachorrinho mesmo! Pitoco tem cerca de dois aninhos e aguarda ansioso por uma família.</p>
                </div>

            </div>
            <Footer/>
        </div>
    )
}


export default Main