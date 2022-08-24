import Formulario from '../../Componentes/Formulario/FormLogin'
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import './Login.css'
import { useState } from 'react'








const Login = (props) =>{
    const [logado, setLogado] = useState(false)
    const [Contas, setContas] = useState([])
    
    


    const Logado = (conta) => {
        console.log(conta)
        setLogado(true)
    }
    console.log(Contas)
    props.status(logado)
    
    
   


    return(
        <div>
            <Header estaLogado = {logado}/>
            <Formulario
              aoLogar={conta => Logado(conta)}  
            />
            <Footer />
        </div>
    )
}




export default Login