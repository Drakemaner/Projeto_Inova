import { useState } from 'react'
import Header from '../../Componentes/Header'
import './Perfil.css'
import FormComentario from '../../Componentes/FormComentario'







const Perfil = (props) => {



    const [Comentarios, setComentarios] = useState([])





    const cadastrarComentario = (comentario) => {
        setComentarios([...Comentarios, comentario])
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
                {Comentarios.map(comentario=><p key={comentario.id}>{comentario.Comentario}</p>)}
                <FormComentario comentario={valor => cadastrarComentario(valor)} />
            </div>
        </div>
    )
}


export default Perfil