import Caes from '../../Componentes/Caes'
import './Perfis.css'

const Perfis = (props) =>{

    perfilEscolhido = (perfil) => {
        props.Escolhido(perfil)
    }

    
    return(
        <div>
            {props.caes.map(cao => <Caes escolhido = {valor => perfilEscolhido(valor)} nome = {cao.nome} idade = {cao.idade} raça = {cao.raça}/>)}
        </div>
    )
}

export default Perfis