import './Comentario.css'


const Comentario = (props) =>{

    const escreverComentario = (evento) =>{
        props.comentario(evento.target.value)
    }


    return(
        <>
           
            <input onChange={escreverComentario} value={props.valor} type='text'/>
            <button type='submit'>Enviar</button>

        </>
    )
}


export default Comentario