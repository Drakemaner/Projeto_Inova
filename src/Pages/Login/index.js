
import Header from '../../Componentes/Header'
import Footer from '../../Componentes/Footer'
import './Login.css'
import { useState } from 'react'
import FormLogin from '../../Componentes/Formulario/FormLogin'








const Login = (props) =>{
    const [logado, setLogado] = useState(false)
    const [login, setLogin] = useState([])
    const [perfil, setPerfil] = useState([])
    const [texto, setTexto] = useState('')
    const [classe, setClasse] = useState('Hidden')
    
    const Logado = (conta) => {
        console.log(conta)
        setPerfil(conta)
        
        setLogin(props.contas.filter(contas => conta.email === contas.email && conta.senha === contas.senha))
     


            if(conta.email === '' || conta.senha === ''){
                setTexto('Campo de E-mail ou Senha vazios')
                setClasse('Aviso')
            }
            else if((conta.email !== '' || conta.senha !== '') && login === []){
                setTexto('E-mail ou Senha Inválidos')
                console.log('Sexo')
                setClasse('Aviso')
            }
            else if(login !== []){
                console.log('Opaa')
                setLogado(true)
                setTexto('Você se Logou com Sucesso')
                setClasse('Sucesso')
            }
        
        
         
    }
    console.log(login)
    props.status(logado)
    
    
   


    return(
        <div>
            <Header estaLogado = {logado}/>
            <FormLogin
              aoLogar={conta => Logado(conta)}  
            />
            <p className={classe}>{texto}</p>
            <Footer />
        </div>
    )
}




export default Login