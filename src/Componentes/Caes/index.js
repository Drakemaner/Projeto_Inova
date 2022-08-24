import './Caes.css'

const Caes = (props) =>{
    return(
        <div>
        <ul>
            <li>
                <img src='' alt='Foto-de-Perfil'/>
                <p>{props.nome}</p>
                <p>{props.idade}</p>
                <p>{props.raça}</p>
            </li>
        </ul>
    </div>
    )
}


export default Caes