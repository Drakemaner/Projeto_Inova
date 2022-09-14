import './FormComentario.css'
import Input from '../Input'
import { useState } from 'react'



const FormComentario = (props) => {
    const [Comentario, setComentario] = useState('')
    const [id, setId] = useState(0)


    const enviarComentario = (evento) => {
        evento.preventDefault()

        setId(id + 1)

        props.comentario
            (
                {
                    id,
                    Comentario
                }
            )
        setComentario('')
    }


    return (
        <>  <div className='comentario'>
            <form onSubmit={enviarComentario}>
                <Input
                    type="text"
                    placeholder="Escreva um comentário..."
                    enviar={valor => setComentario(valor)}
                    valor={Comentario}
                />
            </form>
        </div>
        </>
    )
}


export default FormComentario