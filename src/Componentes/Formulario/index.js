import './Formulario'

const Formulario = (props) => {
    return(
        <div className='form'>
            <form>
                <label for='input'>{props.label}</label>
                <input name ='input' type={props.type} placeholder={props.placeholder}/>
                <button type='submit'></button>
            </form>
        </div>
    )
}

export default Formulario