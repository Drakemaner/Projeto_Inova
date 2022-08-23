import Formulario from '../Formulario'
import Header from '../Header'
import Footer from '../Footer'
import './Login.css'
import { useState } from 'react'








const Login = (props) =>{
    const [logado, setLogado] = useState(false)
    const [Contas, setContas] = useState([])
    
    


    const Logado = (conta) => {
        console.log(conta)
        setContas([...Contas, conta])
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