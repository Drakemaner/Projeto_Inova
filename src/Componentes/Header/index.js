import './Header.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'



const Header = (props) =>{
    const imagem = 'https://raw.githubusercontent.com/Drakemaner/Site-Enzo/main/public/fotos/logo.png'

    const [classeLogado,setClasseLogado] = useState('hidden')
    const [classeGuest, setClasseGuest] = useState('')
    const [logado, setLogado] = useState()


    useEffect(() =>{
        if(props.estaLogado == true){
            setClasseLogado('')
            setClasseGuest('hidden')
        }
        else{
            setClasseLogado('hidden')
            setClasseGuest('')
        }
        setLogado(props.estaLogado)
    },[props.estaLogado])

    
        
    

    return(

        <div className='header'>
            <header>
                <div>
                <Link to='/'><img src={imagem} alt='logo'/></Link>
                </div>
                <nav>
                    <ul>
                        <li className= {classeLogado}><Link to= '/MeuPerfil'><strong>Meu Perfil</strong></Link></li>
                        <li className= {classeLogado}><Link to= '/Perfis'><strong>Perfis</strong></Link></li>
                        <li className={classeGuest}><Link to= '/Login'><strong>Entrar</strong></Link></li>
                        <li className={classeGuest}><Link to= '/Cadastro'><strong>Cadastrar</strong></Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export  default Header