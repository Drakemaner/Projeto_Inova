import { useState } from 'react'
import Header from '../../Componentes/Header'
import './Perfil.css'
import FormComentario from '../../Componentes/FormComentario'







const Perfil = (props) => {



    const [Comentarios, setComentarios] = useState([])





    const cadastrarComentario = (comentario) => {
        comentario.nome = props.perfilLogado
        setComentarios([...Comentarios, comentario])
    }

    console.log(Comentarios)

    return (
        <div>
            <Header  estaLogado={true}/>

            <div className='caesperfil'>
                <h1>Perfil</h1>
                <img src={props.imagem} alt='Foto de perfil' />
                <br/>
                <h3>Sobre Mim</h3>
                <p>{props.descricao}</p>
                <h3>Comentários:</h3>
                {Comentarios.map
                    (
                    comentario=>
                        <div key={comentario.id}>
                            <p>{comentario.nome}</p>
                            <p>{comentario.comentario}</p>
                        </div>)}
                <FormComentario comentario={valor => cadastrarComentario(valor)} />
            </div>
        </div>
    )
}


export default Perfil