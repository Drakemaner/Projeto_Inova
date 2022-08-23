import './Input.css'

const Input = (props) =>{

    const aoEnviar = (evento) =>{
        props.enviar(evento.target.value)
    }

    return(
        <div className='input'>
            <label for='input'>{props.label}</label>
            <input name ='input' onChange={aoEnviar} type={props.type} placeholder={props.placeholder} value = {props.valor} />
        </div>
    )
}

export default Input