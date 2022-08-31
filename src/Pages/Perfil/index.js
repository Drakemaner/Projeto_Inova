import { useState } from 'react'
import Header from '../../Componentes/Header'
import './Perfil.css'
import Comentario from '../../Componentes/Comentario'




const Perfil = (props) =>{


    const [comentario, setComentario] = useState('')
    const [Comentarios, setComentarios] = useState([])
    

    


    const enviarComentario = (evento) => {
        evento.preventDefault()
        setComentarios(...Comentarios, comentario)
        
    }

    console.log(Comentarios)

    return(
        <div>
            <Header/>
            <div>
                <h3>Seu Perfil</h3>
                <p>{props.nome}</p>
                <h2>Sobre Mim</h2>
                <p>Qualquer Merda, Denti essa é com você S2</p>
            </div>
            <div>
                <h3>Comentários:</h3>
                <p>{Comentarios}</p>
                <form onSubmit={enviarComentario}>
                    <Comentario comentario={valor => setComentario(valor)} valor={comentario}/>
                </form>
            </div>
        </div>
    )
}


export default Perfil