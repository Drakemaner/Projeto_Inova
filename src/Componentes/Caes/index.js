import './Caes.css'






const Caes = (props) =>{

    const perfilEscolhido =(nome,idade,raça) =>{
        props.Escolhido({
            nome,
            idade,
            raça
        })
    }
    




    return(
    <div>
        <ul>
            <Link to={`/Perfil/${props.nome}`}> 
                <li>
                    <img src='' alt='Foto-de-Perfil'/>
                    <p>{props.nome}</p>
                    <p>{props.idade}</p>
                    <p>{props.raça}</p>
                    {perfilEscolhido(props.nome, props.idade, props.raça)}
                </li>
            </Link>
        </ul>
    </div>
    )
}


export default Caes