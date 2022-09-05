import './FormComentario.css'
import Input from '../Input'
import { useState } from 'react'



const FormComentario = (props) =>{
    const [Comentario, setComentario] = useState('')
    const [id, setId] = useState(0)


    const enviarComentario = (evento) =>{
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


    return(
        <>  
            <form onSubmit={enviarComentario}>
                <Input
                type="text"
                placeholder="Digite seu Comentário"
                enviar={valor => setComentario(valor)}
                valor={Comentario}
                /> 
                <button type='submit'>Enviar</button>
            </form>     
        </>
    )
}


export default FormComentario