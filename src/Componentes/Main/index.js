import { useEffect, useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Login from '../Login'
import './Main.css'


 const Main = (props) =>{
    
    

   
    
    
    return(
        <div className='main'>
            <Header estaLogado = {props.status}/>
                <p>Sexo2</p>
            <Footer/>
        </div>
    )
}


export default Main