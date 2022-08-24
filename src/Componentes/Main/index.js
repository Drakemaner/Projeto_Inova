import { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Login from '../Login'
import Mapa from '../Mapa'
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