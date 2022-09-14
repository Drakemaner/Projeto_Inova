
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import './Login.css'
import { useState } from 'react'
import FormLogin from '../../Componentes/Formulario/FormLogin'








const Login = (props) =>{
    const [logado, setLogado] = useState(false)
    const [login, setLogin] = useState({})
    const [classe, setClasse] = useState('Hidden')


    const Logado = (conta) => {
        console.log(conta)
        
        setLogin(props.contas.filter(contas => conta.email === contas.email && conta.senha === contas.senha))
        
        if(login.email === conta.email && login.senha === conta.senha){
            login.logado = true
            console.log('Roberto')
            setLogado(true)
            setClasse('Hidden')
        }
        else{
            setClasse('showUp')
            console.log('Sexo')
            setLogin({})
        }
        console.log(classe)
    }
    console.log(login)
    props.status(logado)
    
    
   


    return(
        <div>
            <Header estaLogado = {logado}/>
            <FormLogin
              aoLogar={conta => Logado(conta)}  
            />
            <p className={classe}>Senha ou Email incorreto</p>
            <Footer />
        </div>
    )
}




export default Login