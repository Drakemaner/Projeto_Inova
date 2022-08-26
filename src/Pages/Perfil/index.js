import { useState } from 'react'
import './Perfil.css'




const Perfil = (props) =>{


    const [Comentarios, setComentarios] = useState([])


    const escreverComentario = (evento) => {
        evento.preventDefault()
        setComentarios(...Comentarios, evento.target.value)
    }



    return(
        <div>
            <div>
                <h3>Seu Perfil</h3>
                <p>{props.nome}</p>
                <h2>Sobre Mim</h2>
                <p>Qualquer Merda, Denti essa é com você S2</p>
            </div>
            <div>
                <h3>Comentários:</h3>
                {Comentarios.map(comentarios => <p>{comentarios}</p>)}
                <form onSubmit={escreverComentario}>
                    <input type='text'/>
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </div>
    )
}


export default Perfil