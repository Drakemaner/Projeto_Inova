
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import './Login.css'
import { useState } from 'react'
import FormLogin from '../../Componentes/Formulario/FormLogin'








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
            <FormLogin
              aoLogar={conta => Logado(conta)}  
            />
            <Footer />
        </div>
    )
}




export default Login