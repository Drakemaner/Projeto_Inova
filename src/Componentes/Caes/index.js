import './Caes.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'





const Caes = (props) =>{
    
    





    
    
    



    return(
    <div>
        
        <ul>
            <li>
                <Link to={`/Perfil/${props.nome}`}><img src='' alt='Foto-de-Perfil'/></Link>
                <p>{props.nome}</p>
                <p>{props.idade}</p>
                <p>{props.raça}</p>
            </li>
           
        </ul>
    </div>
    )
}


export default Caes