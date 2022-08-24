import Caes from '../../Componentes/Caes'
import './Perfis.css'

const Perfis = (props) =>{

    

    
    return(
        <div>
            {props.caes.map(cao => <Caes nome = {cao.nome} idade = {cao.idade} raça = {cao.raça}/>)}
        </div>
    )
}

export default Perfis