import './Input.css'

const Input = (props) =>{
    return(
        <div className='input'>
            <label for='input'>{props.label}</label>
            <input name ='input' type={props.type} placeholder={props.placeholder}/>
        </div>
    )
}

export default Input