import { useState } from 'react'
import Header from '../../Componentes/Header'
import './Perfil.css'
import Comentario from '../../Componentes/Comentario'







const Perfil = (props) => {


    const [comentario, setComentario] = useState('')
    const [Comentarios, setComentarios] = useState([])





    const enviarComentario = (evento) => {
        evento.preventDefault()
        setComentarios(...Comentarios, comentario)

    }

    console.log(Comentarios)

    return (
        <div>
            <Header  estaLogado={props.status}/>

            <div className='caesperfil'>
                <h2>Seu Perfil</h2>
                <img src={props.imagem} alt='' />
                <p>{props.nome}</p>
                <h4>Sobre Mim</h4>
                <p>{props.descricao}</p>
                <h4>Comentários:</h4>
                <p>{Comentarios}</p>
                <form onSubmit={enviarComentario}>
                    <Comentario comentario={valor => setComentario(valor)} valor={comentario} />
                </form>
            </div>
        </div>
    )
}


export default Perfil