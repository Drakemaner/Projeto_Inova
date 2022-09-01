import Caes from '../../Componentes/Caes'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import './Perfis.css'

const Perfis = (props) =>{

    

    
    return(
        <div className='perfis'>
            <Header logado ={true}/>
            {props.caes.map(cao => <Caes key = {cao.id} nome = {cao.nome} idade = {cao.idade} raça = {cao.raça}/>)}
            <Footer/>
        </div>
    )
}

export default Perfis