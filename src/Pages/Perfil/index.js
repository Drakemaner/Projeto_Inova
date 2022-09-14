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
                <h1>Perfil</h1>
                <img src={props.imagem} alt='Foto de perfil' />
                <br/>
                <h3>Sobre Mim</h3>
                <p>{props.descricao}</p>
                <h3>Comentários:</h3>
                {Comentarios.map(comentario=><p key={comentario.id}>{comentario.Comentario}</p>)}
                <FormComentario comentario={valor => cadastrarComentario(valor)} />
            </div>
        </div>
    )
}


export default Perfil