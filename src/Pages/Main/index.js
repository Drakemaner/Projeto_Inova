import { useEffect, useState } from 'react'
import Footer from '../../Componentes/Footer'
import Header from '../../Componentes/Header'
import Login from '../Login'
import Mapa from '../../Componentes/Mapa'
import './Main.css'


 const Main = (props) =>{
    
    

   
    
    
    return(
        <div className='main'>
            <Header estaLogado = {props.status}/>
            <Mapa/>
            <Footer/>
        </div>
    )
}


export default Main